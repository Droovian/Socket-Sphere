import express from "express";
import Conversation from '../models/convos.model.js';
import Message from '../models/message.model.js';

export const kuchKaro = async(req, res) => {
    try{
        const { message } = req.body;
        console.log(req.body, req.params.id, req.userId);
        const { id } = req.params;
        const receiverId = req.params.id;
        const senderId = req.userId;

        let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(),  newMessage.save()])
        
        res.status(201).json(newMessage);
        
    }
    catch(err){
        console.log(`Error in message controller`);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}