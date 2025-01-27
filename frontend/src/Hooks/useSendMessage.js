import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";


const useSendMessage = () => {
const [loading,setLoading] =useState(false)

const {messages,setMessages,selectedConversation}=useConversation();
const sendMessage=async(message)=>{
    console.log('tera baap')
    console.log(message)
    console.log('hello')
    setLoading(true)
    try{
const res=await fetch(`/api/messages/send/${selectedConversation._id}`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',

    },
    body:JSON.stringify({message})
})
const data=await res.json();
 console.log(data);
 console.log('afdfdsaf')
if(data.error)throw new Error(data.error)
    setMessages([...messages,data.newMessage]);
   

    }
    catch(error)
    {
        toast.error(error.message);

    }
    finally{
       setLoading(false)
    }
}
 return {sendMessage,loading};
}

export default useSendMessage