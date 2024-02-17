import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js'
import messageRoutes from './routes/message.routes.js';
import connectToMongo from './db/connection.js';
import userRoutes from './routes/user.route.js';
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../.env');

const app = express();

dotenv.config({ path: envPath });

const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send("Hello world!");
// });



app.listen(PORT, () => {
    connectToMongo();
    console.log(`server listening on port ${PORT}`);
})