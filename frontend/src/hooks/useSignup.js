import { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const signup = async({fullName, username, password, confirmPassword, gender}) => {

        const success = handleErrors({fullName, username, password, confirmPassword, gender})

        if(!success) return;

        setLoading(true);

        try{
            const res = await axios.post("http://localhost:3000/api/auth/signup", {
                fullName, username, password, confirmPassword, gender
            });

            console.log(res);
            toast.success("Signed up successfully!");

            localStorage.setItem("chat-user", JSON.stringify(res.data));
            setAuthUser(res);
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }   

    return { loading, signup };
}

export default useSignup

function handleErrors({fullName, username, password, confirmPassword, gender}){

    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill in all fields");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords did not match");
        return false;
    }

    if(password.length < 6){
        toast.error('Password must be atleast 6 characters');
        return false;
    }

    return true;
}