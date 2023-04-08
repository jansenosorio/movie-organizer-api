import { ApplicationError } from "../protocols/types.js";

export function idIsInvalid(): ApplicationError {
    return {
        name: 'InvalidIdError',
        message: "Movie id does not exists"
    }
}

export function userExists(): ApplicationError {
    return {
        name: 'UserExists',
        message: 'User or email already exists'
    }
}