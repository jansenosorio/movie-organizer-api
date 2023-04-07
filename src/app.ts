import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const server = express()

server.use(cors())
server.use(express.json())


const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})