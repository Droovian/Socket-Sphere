import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import axios from 'axios';

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const token = localStorage.getItem("access_token");

	if (!token) {
		console.error("Access token is missing. Unable to send message.");
		return;
	}
	// console.log(token);
	// console.log(selectedConversation._id);
	const sendMessage = async (message) => {
		setLoading(true);
		// console.log(message);
		try {
			const res = await axios.post(
				`http://localhost:3000/api/messages/bhej/${selectedConversation._id}`,
				{ message: message },
				{
					headers: {
						'Content-Type': 'application/json',
						'Authorization': token,
					},
				}
			);

			setMessages(prevMessages => [...prevMessages, res.data]);

		} 
        catch (error) {
			toast.error(error.message);
		} 

        finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;