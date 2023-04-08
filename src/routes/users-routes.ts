import { Router } from "express";
import { validate } from "../middleware/validate-schema-middleware.js";
import { usersSchema } from "../schemas/users-schemas.js";
import { registerUser } from "../controllers/users-controllers.js";

const userRouters = Router()

userRouters.post('/register', validate(usersSchema, 'body'), registerUser)

export default userRouters