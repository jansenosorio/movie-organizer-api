import { Router } from "express";
import { getAllMovies, getMovieById, updateMovieById } from "../controllers/movies-controllers.js";

const moviesRoutes = Router()

moviesRoutes.get('/', getAllMovies)
moviesRoutes.get('/:id', getMovieById)
moviesRoutes.put('/:id', updateMovieById)

export default moviesRoutes