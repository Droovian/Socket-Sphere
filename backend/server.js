import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js'
import messageRoutes from './routes/message.routes.js';
import connectToMongo from './db/connection.js';
import userRoutes from './routes/user.route.js';
import cors from 'cors';
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../.env');

import { app, server } from "./socket/socket.js";
app.use(express.json()); 
app.use(cookieParser());
app.use(cors());

dotenv.config({ path: envPath });

const PORT = process.env.PORT || 3000;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send("Hello world!");
// });

server.listen(PORT, () => {
    connectToMongo();
    console.log(`server listening on port ${PORT}`);
})