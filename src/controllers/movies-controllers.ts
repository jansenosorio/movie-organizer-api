import { NextFunction, Request, Response } from "express";
import { getMoviesFromDb } from "../repositories/movies-repositories.js";
import { verifyIfIsValidId, updateMovieService } from '../services/movies-services.js'
import httpStatus from "http-status";

export async function getAllMovies(req: Request, res: Response, next: NextFunction) {
    try {
        const allMovies = await getMoviesFromDb()
        res.status(httpStatus.OK).send(allMovies)
    } catch (err) {
        next(err)
    }

}

export async function getMovieById(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id

    try {
        const movieById = await verifyIfIsValidId(Number(id))
        res.status(httpStatus.OK).send(movieById)
    } catch (err) {
        next(err)
    }
}

export async function updateMovieById(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id

    try {
        await updateMovieService(Number(id))
        res.sendStatus(httpStatus.OK)
    } catch (err) {
        next(err)
    }
}
