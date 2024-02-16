import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import checkRoute from '../middleware/checkRoute.js';

const router = express.Router();

router.post("/send/:id", checkRoute,  sendMessage);
router.get("/:id", checkRoute, getMessages);

export default router;