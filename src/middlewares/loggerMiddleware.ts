/**
 * author Saquib Shaikh
 * created on 23-03-2024-02h-10m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

import { Request, Response, NextFunction } from "express";
import logger from "src/common/logger";

const loggerMiddleware = (req: Request, _res: Response, next: NextFunction) => {
    logger.info(`${req.method.toUpperCase()} ${req.url}`)
	next();
};

export default loggerMiddleware;
