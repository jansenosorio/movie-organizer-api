import connectDB from '../config/database.js'

async function getMoviesFromDb() {
    const allMovies = await connectDB.movies.findMany()
    return allMovies
}


export default getMoviesFromDb