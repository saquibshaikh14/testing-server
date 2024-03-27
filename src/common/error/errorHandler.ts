/**
 * author Saquib Shaikh
 * created on 24-03-2024-22h-36m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

import { Request, Response } from "express";
import processError from "./processError";
import logger from "../logger";

export default function errorHandler(
	error: any,
	req?: Request,
	res?: Response
) {
	if (error) {
		if (res) {
			const info = {
				method: req?.method,
				ips: req?.ips,
				url: req?.originalUrl,
				requestId: req?.additionalProps.requestId,
			};
            // logger.debug(info, "Request Information");
			logger.error(error, info, error.name);
			//handle exception
			processError(error, res);
		} else {
			logger.debug("Non server request error");
			//handle non request error
			logger.error(error, error.name);
			processError(error);
		}
	} else {
		logger.debug("No error availble in error handler");
        if(req && res){
            const _logger = req.additionalProps.logger;
            _logger.debug("Closing request without any response");
            res.end();
        }
	}
}
