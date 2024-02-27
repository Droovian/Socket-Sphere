import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import { kuchKaro } from '../controllers/testing.controller.js';

import checkRoute from '../middleware/checkRoute.js';

const router = express.Router();

router.post("/bhej/:id", checkRoute, kuchKaro);
router.get("/:id", checkRoute, getMessages);

export default router;