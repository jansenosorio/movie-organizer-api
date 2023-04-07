import express, { Router, json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import moviesRoutes from './routes/moveis-routes.js'
import {handleApplicationErrors} from './middleware/error-handling-middleware.js'
dotenv.config()

const server = express()

server.use(cors())
server.use(express.json())
server.use([moviesRoutes])
server.use(handleApplicationErrors)


const PORT = process.env.SERVER_PORT || 4000
server.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})