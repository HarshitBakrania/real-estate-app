import { useState, useEffect } from "react";
import axios from "axios";

export const useUserPosts = () =>{
    const[loading, setLoading] = useState(true);
    const[posts, setPosts] = useState([]);

    useEffect(() =>{
        const fetchPosts = async () =>{
            try{
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/userPosts`,{
                    withCredentials: true
                })
                setPosts(response.data);
                setLoading(false);
            }catch(error){
                console.log(error.response.data);
            }
        }
        fetchPosts();
    },[])

    return{
        posts,
        loading
    }
}