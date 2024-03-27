/**
 * author Saquib Shaikh
 * created on 23-03-2024-03h-47m
 * github: https://github.com/saquibshaikh14
 * copyright ${YEAR}
 **/

import { Router } from "express";
import authRoute from "./auth.route";
const router = Router();

router.use(authRoute);
router.use('/error', (_req, _res, _next)=>{
    _next(Error("my test error"));
})

const baseRoutes = router.use("/v1", router);

export default baseRoutes;
