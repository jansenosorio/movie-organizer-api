import { idIsInvalid } from '../err/errors.js'
import { deleteCommentByIdRepositorie, getCommentsById, getMoviesById, updateMovieRepositorie } from '../repositories/movies-repositories.js'

async function verifyIfIsValidId(id: number) {
    const moviesById = await getMoviesById(id)
    if (!moviesById) throw idIsInvalid()
    return moviesById
}

async function updateMovieService(id: number) {
    const getMovieById = await getMoviesById(id)
    if (!getMovieById) throw idIsInvalid()
    const movieUpdated = await updateMovieRepositorie(id)
    return movieUpdated
}

async function deleteCommentByIdService(id: number) {
    const comment = await getCommentsById(id)
    if (!comment) throw idIsInvalid()
    const deletedComment = await deleteCommentByIdRepositorie(id)
    return deletedComment
}

export {
    verifyIfIsValidId,
    updateMovieService,
    deleteCommentByIdService
}