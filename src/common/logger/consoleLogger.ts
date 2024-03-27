/**
 * author Saquib Shaikh
 * created on 21-03-2024-15h-45m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

import pino, { LoggerOptions } from "pino";

const pinoOption: LoggerOptions = {
	// enabled: false,
	level: "debug",
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
            translateTime: false,
		},
	},
};

const consoleLogger = pino(pinoOption);

export default consoleLogger;
