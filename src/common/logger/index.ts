/**
 * author Saquib Shaikh
 * created on 21-03-2024-21h-59m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

import consoleLogger from "./consoleLogger";
import fileLogger from "./fileLogger";

const isProduction = process.env.NODE_ENV === "production";
const logger = isProduction ? fileLogger : consoleLogger;

export default logger;
