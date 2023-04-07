import { Router } from "express";

const moviesRoutes = Router()

moviesRoutes.get('/', () => {
    console.log("Hello Word")
})


export default moviesRoutes