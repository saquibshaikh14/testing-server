/**
 * author Saquib Shaikh
 * created on 23-03-2024-03h-59m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

// src/routes/authRoutes.ts

import { NextFunction, Request, Router } from "express";
import CriticalError from "src/common/error/customErrors/CrititcalError";

const authController = {
	register: (_req: Request, _res: any, next: NextFunction) => {
		// const logger = _req.additionalProps.logger;
		// logger.debug("Inside auth controller")
		next(
			new CriticalError({
				message: "Api error raised from line 15 auth route.ts manually",
				requestId: _req.additionalProps.requestId,
				responseMessage: "This mesage to be sent to storefront",
				status: 400,
			})
		);
	},
	login: () => {},
};

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
