import express from "express";
import { Markers } from "./routes/markers.js";
import { dbConnect } from "./dbConfig/dbConnect.js";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/markers', Markers);
server.post('/markers', Markers);
server.delete('/markers', Markers);

dbConnect();
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})