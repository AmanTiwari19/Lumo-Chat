import {  createContext, useContext, useEffect, useState } from "react";
import { useAuthcontext } from "./AuthContext";
import io from "socket.io-client"

export const SocketContext= createContext()
export const useSocketContext=()=>{

 return useContext(SocketContext)
}
export const SocketContextProvider=({children})=>{
     const [socket,setSocket]=useState(null);
     const [onlineUsers,setOnlineUsers]=useState([]);
     const {authUser}=useAuthcontext();
     useEffect(()=>{
           if(authUser){
            console.log(authUser);
            const socket=io("http://localhost:7000",{
                query:{
                    userId:authUser._id
                }
            })
            setSocket(socket);
// socket.on is used on both client and server to listen to events
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users)
            })
        return ()=>socket.close();
           }
           else{
            if(socket){
                socket.close();
                setSocket(null);
            }
           }
     },[authUser])
    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}