import { userExists } from "../err/errors.js";
import { User } from "../protocols/types.js";
import { getUserByEmail, registerNewUser } from "../repositories/users-repositories.js";

async function registerUserAtDb(body:User) {
    const user = await getUserByEmail(body)
    if (user) throw userExists()
    const newUser = await registerNewUser(body)
    return newUser
}

export {
    registerUserAtDb
}