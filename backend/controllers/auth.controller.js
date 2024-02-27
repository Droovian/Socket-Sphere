import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    
    try{
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({
                message: "Passwords do not match"
            })
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPass,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
        });

        if(newUser){

            const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
                token: token
            })
        }
        else{
            res.status(400).json({
                message : 'Invalid user data'
            })
        }
    }
    catch(err){
        console.log(`Error occured in auth controller`);
    }
}


export const login = async (req, res) => {
    try{
        const { username, password } = req.body;

        const user = await User.findOne({username});

        const checkPass = await bcrypt.compare(password, user?.password || "");

        if(!user || !checkPass){
            return res.status(400).json({
                message: 'Invalid username / password'
            })
        }

        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET);

        res.status(200).json({
            _id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
            msg : "Login successful",
            token: token
        });
    }
    catch(err){
        console.log(`Error while logging in`, err.message);
        res.status(500).json({
            message : 'Error while logging in'
        })
    }
}

export const logout = async (req, res) => {
   try{
        res.cookie("jwt", "", {maxAge: 0});
        
        res.status(200).json({ message: "Logged out successfully" });
   }
   catch(err){
        console.log(`Error in logout controller`, err.message);
        res.status(500).json({
            message : 'Error while logging out'
        })
   }
}