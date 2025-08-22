import { useEffect } from 'react';
import { socket } from '../socket';

const useSocketConnect = () => {
    useEffect(() => {
        socket.connect()
        socket.on("connection", (data) => {
            console.log(data);
        })
        socket.off("connection", (data) => {
            console.log(data);
        })
        return () => {
            socket.disconnect()
    }

    }, [])
  return null;
};

export default useSocketConnect;
