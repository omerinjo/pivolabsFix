const Joi = require('@hapi/joi');

module.exports = {
    validate: (schema) => {
        return (req, res, next) => {
            const resoult = Joi.validate(req.body, schema)
            if (resoult.error) {
                return res.status(200).json(resoult.error)
            }
            if (!req.value) { value = {} }
            req.value = resoult.value;
            next();
        }
    },

    schema: {
        signUp: Joi.object().keys({
            email: Joi.string().email().required().error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case "string.base":
                            err.message = "Email should not be empty!";
                            break;
                        case "any.required":
                            err.message = "Email is required!"
                            break;
                        case "string.email":
                            err.message = "Provide correct email!"
                            break;
                    }
                })
                return errors
            }),
            password: Joi.string().min(6).max(12).required().error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case "any.empty":
                            err.message = "Password should not be empty!";
                            break;
                        case "string.base":
                            err.message = "Password should not be empty!";
                            break;
                        case "string.min":
                            err.message = `Password should have at least ${err.context.limit} characters!`;
                            break;
                        case "string.max":
                            err.message = `Password should have at most ${err.context.limit} characters!`;
                            break;
                        default:
                            break;
                    }
                });
                return errors;
            }),
            first_name: Joi.string().min(4).max(25).required().error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case "any.required":
                            err.message = "Firest name should not be empty!";
                            break;
                        case "any.empty":
                            err.message = "Firest name should not be empty!";
                            break;
                        case "string.min":
                            err.message = `Firest name should have at least ${err.context.limit} characters!`;
                            break;
                        case "string.max":
                            err.message = `Firest name should have at most ${err.context.limit} characters!`;
                            break;
                        default:
                            break;
                    }
                });
                return errors;
            }),
            last_name: Joi.string().min(4).max(25).required().error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case "any.required":
                            err.message = "Last name should not be empty!";
                            break;
                        case "any.empty":
                            err.message = "Last name should not be empty!";
                            break;
                        case "string.min":
                            err.message = `Last name should have at least ${err.context.limit} characters!`;
                            break;
                        case "string.max":
                            err.message = `Last name should have at most ${err.context.limit} characters!`;
                            break;
                        default:
                            break;
                    }
                });
                return errors;
            })
        }),

        login: Joi.object().keys({
            email: Joi.string().email().required().error(errors => {
                errors.forEach(err => {
                    console.log("errro type ", err.type)
                    switch (err.type) {
                        case "any.empty":
                            err.message = "Email is required!";
                            break;
                        case "any.required":
                            err.message = "Email is required!"
                            break;
                        case "string.base":
                            err.message = "Email is required!"
                            break;
                        case "string.email":
                            err.message = "Provide correct email!"
                            break;
                    }
                })
                return errors
            }),
            password: Joi.string().required().error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case "any.empty":
                            err.message = "Password should not be empty!";
                            break;
                        case "any.required":
                            err.message = "Password should not be empty!";
                            break;
                        case "string.base":
                            err.message = "Password is incorrect!";
                            break;
                    }
                });
                return errors;
            }),
        }),

        passwordUpdate: Joi.object().keys({
            password: Joi.string().required().error(errors => {
                errors.forEach(err => {
                    switch (err.type) {
                        case "any.empty":
                            err.message = "Password should not be empty!";
                            break;
                        case "string.min":
                            err.message = `Password should have at least ${err.context.limit} characters!`;
                            break;
                        case "string.max":
                            err.message = `Password should have at most ${err.context.limit} characters!`;
                            break;
                        default:
                            break;
                    }
                });
                return errors;
            }),
        })
    }
}