import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from './../../Hooks/useGetConversations';
import toast from "react-hot-toast";


const SearchInput = () => {
  const [search,setSearch]=useState("")
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations();


  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<3){
     return toast.error("Search must be atleast 3 character long")
    }

  
  console.log('isko check karo')
   console.log(conversations)

  const conversation=conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase())
  )
  if(conversation)
    {
      setSelectedConversation(conversation);
      setSearch('');
    }
    else toast.error("no such user found")

  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="search"
        className="input input-bordered rounded-full mt-4"
      />
      <button
        type="submit"
        className="btn btn-circle mt-4 bg-sky-500 text-white"
      >
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
