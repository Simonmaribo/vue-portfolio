
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

import { useCookie } from 'h3';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if(event.req.method !== "POST") {
        event.res.statusCode = 405;
        return {
            error: "Method not allowed"
        }
    }

    var { text, rating } = await useBody(event);
    if(!text || !rating) {
        event.res.statusCode = 400;
        return {
            error: "Missing fields in request: token or text or rating"
        }
    }

    if(text.length > 1000) {
        event.res.statusCode = 400;
        return {
            error: "Text is too long"
        }
    }

    rating = parseInt(rating);
    if(rating < 1 || rating > 5) {
        event.res.statusCode = 400;
        return {
            error: "Rating must be between 1 and 5"
        }
    }

    var token = useCookie(event, "token");
    if(!token) {
        event.res.statusCode = 401;
        return {
            error: "Missing token"
        }
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);
    if(!data) {
        event.res.statusCode = 401;
        return {
            error: "Invalid token"
        }
    }

    const oldMessage = await prisma.message.findFirst({
        where: {
            googleId: data.googleId,
        }
    });
    
    if(oldMessage) {
        event.res.statusCode = 400;
        return {
            error: "You already submitted a message"
        }
    } else {
        const newMessage = await prisma.message.create({
            data: {
                text,
                rating,
                name: data.name,
                email: data.email,
                avatarUrl: data.avatarUrl,
                googleId: data.googleId
            }
        });
        event.res.statusCode = 200;
        return {
            success: true,
            message: newMessage
        }
    }
})