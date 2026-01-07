import http from "http";

import app from "./src/app.js";

const server = http.createServer(app, (error) => {
    console.log("Error creating server!!", error);
})

server.listen(3001, () => {
    console.log("Server is running on 3001");
})

