/**
 * author Saquib Shaikh
 * created on 24-03-2024-21h-55m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

import { NextFunction, Request, Response } from "express";
import errorHandler from "src/common/error/errorHandler";

// import logger from "./logger"

export default function errorMiddleware(
	error: any,
	req: Request,
	res: Response,
	_next: NextFunction
) {
	// const logger = req.additionalProps.logger;
	// logger.error(error, "Some error occured while processing request");

	errorHandler(error, req, res);

	//generate error response for response.
	//there can be chance error happens due to internal scripts not from request event.
	/**
	 * need to extend error object and divide error in request error or api error or some other error
	 * for some other error trigger mail.
	 * for api error if originated by request event and request error, send a proper generic descriptive message to request, and log all details
	 * for api error originated by internal script - log error.
	 * if api error is blocking some critical functionality - need to trigger email
	 */
}

// check review on youtube
