import express from 'express';
import messageController from '../controllers/messageController.js'

const messageRouter=express.Router();

messageRouter.get('/', (messageController))
export default messageRouter