import { idIsInvalid } from '../err/errors.js'
import { getMoviesById } from '../repositories/movies-repositories.js'

async function verifyIfIsValidId (id: number){
    const moviesById = await getMoviesById(id)
    if (!moviesById) throw idIsInvalid()
    return moviesById
}

export {
    verifyIfIsValidId
}