/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext,useState } from "react";
import { io, Socket } from "socket.io-client";
import { showToastMessage } from "../utils/Toast.errors";
import { useAuthContext } from "./Createcontext";

interface socketInterface {
  message: string
}

export const useSocket = () => {
  const { authToken} = useContext(useAuthContext);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if(authToken) {
      console.log(isConnected)
      const socket: Socket = io("http://localhost:3007", {
        withCredentials: true
      });
  
    socket.on("assignmentAdded", (data) => {
      showToastMessage(data.message, 200);
    });
    socket.emit("assignmentAdded", (data:socketInterface) => {
      showToastMessage(data.message, 200);
    });

    return () => {
      socket.disconnect();
      setIsConnected(false)
    };
  }
  }, [authToken]);
};
