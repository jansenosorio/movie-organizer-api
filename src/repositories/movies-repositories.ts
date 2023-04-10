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

async function getCommentsById(id: number) {
    const moviesById = await connectDB.comments.findUnique({
        where: {
            id: id
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

async function deleteCommentByIdRepositorie(id: number) {
    await connectDB.comments.delete({
        where: {
            id: id
        }
    })
}

export {
    getMoviesFromDb,
    getMoviesById,
    getCommentsById,
    updateMovieRepositorie,
    deleteCommentByIdRepositorie
}