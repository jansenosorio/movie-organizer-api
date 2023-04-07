import { NextFunction, Request, Response } from "express";
import getMoviesFromDb from "../repositories/movies-repositories.js";
import httpStatus from "http-status";

async function getAllMovies(req: Request, res: Response, next: NextFunction) {
    try {
        const allMovies = await getMoviesFromDb()
        res.status(httpStatus.OK).send(allMovies)
    } catch (err) {
        next(err)
    }
    
}


export default getAllMovies