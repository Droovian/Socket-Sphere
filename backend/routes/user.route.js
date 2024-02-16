import express from 'express';
import checkRoute from '../middleware/checkRoute.js';
import { getUserDetails } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', checkRoute, getUserDetails);

export default router;