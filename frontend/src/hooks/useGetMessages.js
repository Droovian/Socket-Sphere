import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

    const token = localStorage.getItem("access_token");
    // console.log(selectedConversation._id);
	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await axios.get(`http://localhost:3000/api/messages/${selectedConversation._id}`, {
                    headers:{
						authorization: `${token}`
					}
                });

				console.log('res is', res.data);
		
				setMessages(res.data);

			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;