import { NextFunction, Request, Response } from "express";
import {getMoviesFromDb, getMoviesById} from "../repositories/movies-repositories.js";
import httpStatus from "http-status";

export async function getAllMovies(req: Request, res: Response, next: NextFunction) {
    try {
        const allMovies = await getMoviesFromDb()
        res.status(httpStatus.OK).send(allMovies)
    } catch (err) {
        next(err)
    }
    
}

export async function getMovieById(req:Request, res: Response, next: NextFunction) {
    const id : string = req.params.id

    try {
        const movieById = await getMoviesById(Number(id))
        res.status(httpStatus.OK).send(movieById)
    } catch (err) {
        next(err)
    }
}
