import { Application, Request, NextFunction, Response } from "express";
import {v4 as uuid} from 'uuid';
import errorMiddleware from "src/middlewares/errorMiddleware";
import loggerMiddleware from "src/middlewares/loggerMiddleware";
import logger from "./logger";
import baseRoutes from "src/routes/index.route";

/**
 * 
 * @param app express application
 */
export default function loadConfiguration(app: Application): void {
	app.use(loggerMiddleware);
	app.use(attachDataToRequest); //attach addtional data to request
	app.use(baseRoutes); //mount controller
	app.use(errorMiddleware); //handle request error
}

const attachDataToRequest = (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	let requestId = uuid();
	req.additionalProps = {
		logger: logger.child({requestId}),
		requestId: requestId
	};
	next();
};
