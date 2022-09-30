import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if(event.req.method !== "GET") {
        event.res.statusCode = 405;
        return {
            error: "Method not allowed"
        }
    }

    event.res.setHeader("Content-Type", "application/json");
    event.res.setHeader("Access-Control-Allow-Origin", "*");
    //event.res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");

    const messages = await prisma.message.findMany({
        where: {
            hidden: false
        },
        orderBy: {
            createdAt: "desc"
        },
        select: {
            text: true,
            rating: true,
            name: true,
            title: true,
            avatarUrl: true,
            createdAt: true
        }
    });

    event.res.statusCode = 200;
    return {
        success: true,
        messages,
    }
});