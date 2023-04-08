import { ApplicationError } from "../protocols/types.js";

export function idIsInvalid(): ApplicationError {
    return {
        name: 'InvalidIdError',
        message: "Movie id does not exists"
    }
}