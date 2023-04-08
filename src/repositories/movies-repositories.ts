import connectDB from '../config/database.js'

async function getMoviesFromDb() {
    const allMovies = await connectDB.movies.findMany()
    return allMovies
}

async function getMoviesById(id:number) {
    const moviesById = await connectDB.movies.findUnique({
        where: {
            movieId: id
        },
        include:{
            platform: true
        }
    })

    return moviesById
}

export {
    getMoviesFromDb,
    getMoviesById
}