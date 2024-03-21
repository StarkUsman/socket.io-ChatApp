import {Server} from "socket.io";
import {io} from "socket.io-client";

const ios = new Server(3000);
const socket = io("ws://localhost:3000");

ios.on("connection", (socket) => {
        socket.emit("news", { hello: "world" });

        socket.on("howdy", (data) => {
            console.log(data);
        });
    });

socket.on("news", (data) => {
    console.log(data);
});
socket.emit("howdy", { hi: "there" });
