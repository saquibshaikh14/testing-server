/**
 * author Saquib Shaikh
 * created on 22-03-2024-01h-25m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

import { Logger } from "pino";

export interface AppConfigOption {
	additionalProps: AdditionalProps;
        [key: string]: any;
}
export interface AdditionalProps {
	logger: Logger;
	requestId: string;
	// Add more properties as needed
}


