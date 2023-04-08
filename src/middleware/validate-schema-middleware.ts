import { ObjectSchema } from "joi";
import { Response, Request, NextFunction } from "express";
import httpStatus from "http-status";

function validate(schema: ObjectSchema, type: 'body' | 'params') {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req[type], {
        abortEarly: false,
      });
  
      if (!error) {
        next();
      } else {
        res.status(httpStatus.BAD_REQUEST).send(error.details.map((d) => d.message));
      }
    };
  }

export {
    validate
}