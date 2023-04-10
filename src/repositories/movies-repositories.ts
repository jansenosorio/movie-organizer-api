import connectDB from '../config/database.js'

async function getMoviesFromDb() {
    const allMovies = await connectDB.movies.findMany()
    return allMovies
}

async function getMoviesById(id: number) {
    const moviesById = await connectDB.movies.findUnique({
        where: {
            movieId: id
        },
        include: {
            platform: true
        }
    })

    return moviesById
}

async function updateMovieRepositorie(id: number) {
    const updatedMovie = await connectDB.movies.update({
        where: {
            movieId: id
        },
        data: {
            status: 'WATCHED'
        }
    })
}

export {
    getMoviesFromDb,
    getMoviesById,
    updateMovieRepositorie
}