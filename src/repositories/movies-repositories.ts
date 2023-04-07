import connectDB from '../config/database.js'

async function getMoviesFromDb() {
    const allMovies = await connectDB.movies.findMany()
    return allMovies
}

async function getMoviesById(id:number) {
    const moviesById = await connectDB.movies.findUnique({
        where: {
            movieId: id
        }
    })

    return moviesById
}

export {
    getMoviesFromDb,
    getMoviesById
}