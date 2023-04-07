import { Router } from "express";
import getAllMovies from "../controllers/movies-controllers.js";

const moviesRoutes = Router()

moviesRoutes.get('/', getAllMovies)


export default moviesRoutes