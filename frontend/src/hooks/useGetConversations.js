import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import axios from "axios";

const useGetConversations = () => {
	const [cookies, setCookies] = useCookies(["access_token"]);
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	const token = localStorage.getItem("access_token");

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await axios.get("http://localhost:3000/api/users", {
					headers:{
						authorization: `${token}`
					}
				});
				// console.log(res.data);
				setConversations(res.data.filteredUsers);
				// console.log(res.data.filteredUsers);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;