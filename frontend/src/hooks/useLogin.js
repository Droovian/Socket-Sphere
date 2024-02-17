import { useState } from "react"
import axios from "axios";
import { useAuthContext } from '../context/AuthContext';
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";

const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    const [_, setCookies] = useCookies(["access_token"]);

    const login = async(username, password) => {

      const success = handleErrors(username, password);
      if(!success) return;

        setLoading(true);
        try{
            const res = await axios.post("http://localhost:3000/api/auth/login", {
              username, password
            });

            setCookies("access_token", res.data.token);
            localStorage.setItem("access_token", res.data.token);

            toast.success("Logged in successfully");

            localStorage.setItem("chat-user", JSON.stringify(res.data));
            setAuthUser(res.data);
        }
        catch(err){
          toast.error(err.message);
        }
        finally{
          setLoading(false);
        }
    }
  return { loading, login };
}

export default useLogin

function handleErrors(username, password){

  if( !username || !password ){
      toast.error("Please fill in all fields");
      return false;
  }

  return true;
}