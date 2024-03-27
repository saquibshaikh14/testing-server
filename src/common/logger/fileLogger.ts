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
		targets: [
			{
				target: "pino/file",
				level: "debug",
				options: { destination: "logs/server.log", mkdir: true },
			},
			{
				target: "pino-pretty",
				level: "error",
				options: {
					destination: "logs/server_error.log",
					translateTime: false,
					mkdir: true,
					colorize: false,
				},
			},
		],
	},
};

const fileLogger = pino(pinoOption);

export default fileLogger;
