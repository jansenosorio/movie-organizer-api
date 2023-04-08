import { Request, Response, NextFunction } from "express";
import { User } from "../protocols/types.js";
import { registerUserAtDb } from "../services/users-services.js";
import httpStatus from "http-status";

export async function registerUser(req:Request, res: Response, next: NextFunction) {
    const body:User = req.body

    try {
        const userRegister = await registerUserAtDb(body)
        res.status(httpStatus.CREATED).send(userRegister)
    } catch (err) {
        next(err)
    }
}