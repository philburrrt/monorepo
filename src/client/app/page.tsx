"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:4000");

export default function Home() {
  const sendMsg = () => {
    socket.emit("send", {
      room: "room1",
      content: "Hello World!",
    });
  };

  useEffect(() => {
    socket.emit("join_room", "room1");
    socket.on("receive", (data: any) => {
      console.log("received", data);
    });
  }, []);

  return (
    <>
      <button onClick={sendMsg}>Send</button>
    </>
  );
}
