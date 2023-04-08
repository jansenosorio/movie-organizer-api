import connectDB from "../config/database.js";
import { User } from "../protocols/types.js";

async function getUserByEmail(body:User) {
    const user = connectDB.user.findUnique({
        where:{
            userEmail: body.email
        }
    })

    return user
}

async function registerNewUser(body:User) {
   const user = await connectDB.user.create({
        data:{
           userName: body.name,
           userEmail: body.email 
        }
    })

    return user
}

export {
    getUserByEmail,
    registerNewUser
}