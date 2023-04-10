import { Router } from "express";
import { deleteCommentById, getAllMovies, getMovieById, updateMovieById } from "../controllers/movies-controllers.js";

const moviesRoutes = Router()

moviesRoutes.get('/', getAllMovies)
moviesRoutes.get('/:id', getMovieById)
moviesRoutes.put('/:id', updateMovieById)
moviesRoutes.delete('/:id', deleteCommentById)

export default moviesRoutes