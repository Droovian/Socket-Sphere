import User from "../models/user.model.js";

export const getUserDetails = async (req, res) => {
    try {
      
        const loggedInUserId = req.userId;
		// console.log(`user id is ${loggedInUserId}`);
        if (!loggedInUserId) {
            return res.status(401).json({ error: "Unauthorized - Missing userId" });
        }

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
		// console.log(`filtered user is ${filteredUsers}`); works yay
        res.status(200).json({filteredUsers});
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
