import { Router } from "express";
import {getAllMovies, getMovieById} from "../controllers/movies-controllers.js";

const moviesRoutes = Router()

moviesRoutes.get('/', getAllMovies)
moviesRoutes.get('/:id', getMovieById)

export default moviesRoutes