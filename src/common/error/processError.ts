/**
 * author Saquib Shaikh
 * created on 25-03-2024-22h-57m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

// import logger from "common/logger";
import { Response } from "express";
import logger from "../logger";
import CriticalError from "./customErrors/CrititcalError";

export default function processError(error: any, res?: Response) {
	//if response create response to be sent to response and close the connection.
	//if no request error. log properly and error is critical trigger mail
	if (error.name === "CRITICAL_ERROR") {
		triggerMail(error).catch((e) => logger.error(e, "ERROR_SENDING MAIL"));
	}

	if (res) {
		const response = {
			status: error.status,
			message: error.responseMessage || "Something went wrong!",
			clientData: error.clientData || null,
			requestId: error.requestId || null,
		};
		logger.debug(response, "Error response sent to client");
		return res.status(response.status).json(response);
	}
}

async function triggerMail(_error: CriticalError) {
	// test();
	try {
		console.log("inside try");
		await test();
	} catch (e) {
		console.log("{sowshdoiu error", e);
		throw e;
	}
}

async function test() {
	// return new Promise((_resolve, reject)=>{
	// 	setTimeout(()=>{reject("behbdhe")}, 2000);
	// })
	try {
		return Promise.reject("dshdj");
	} catch (e) {
		console.log(e, "tets");
	}
}
