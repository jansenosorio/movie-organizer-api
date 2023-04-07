import express, { Router, json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import moviesRoutes from './routes/moveis-routes.js'
dotenv.config()

const server = express()

server.use(cors())
server.use(express.json())
server.use([moviesRoutes])


const PORT = process.env.SERVER_PORT || 4000
server.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})