import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import axios from 'axios';

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	// console.log(token);
	// console.log(selectedConversation._id);
	const sendMessage = async (message) => {
		const token = localStorage.getItem("access_token");

		if (!token) {
			console.error("Access token is missing. Unable to send message.");
			return;
		}

		setLoading(true);
		// console.log(message);
		try {
			const res = await fetch(`http://localhost:3000/api/messages/bhej/${selectedConversation._id}`,{
				method: "POST",
				headers: {
						'Content-Type': 'application/json',
						'Authorization': token,
				},
				body: JSON.stringify({ message }),
				
			});

			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);
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