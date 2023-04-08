import joi from 'joi'

const usersSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required()
})

export {
    usersSchema
}