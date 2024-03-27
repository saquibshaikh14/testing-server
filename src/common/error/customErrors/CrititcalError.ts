/**
* author Saquib Shaikh
* created on 27-03-2024-01h-26m
* github: https://github.com/saquibshaikh14
* copyright ${YEAR}
**/


/**
 * author Saquib Shaikh
 * created on 25-03-2024-23h-06m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

export default class CriticalError extends Error {
	status: any;
	responseMessage: string;
	requestId?: string;
	additionalInfo: any;
	clientData: any;
	constructor(error: {
		message: string;
		status?: number;
		responseMessage?: string;
		requestId?: string;
		additionalInfo?: any;
		clientData?: any;
	}) {
		super(error.message);
		this.status = error.status || 500;
		this.responseMessage = error.responseMessage || "Critical_Error";
		this.requestId = error.requestId || "NA";
		this.name = "CRITICAL_ERROR";
		this.additionalInfo = error.additionalInfo || null;
		this.clientData = error.clientData || null;
	}
}
