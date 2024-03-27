/**
* author Saquib Shaikh
* created on 21-03-2024-00h-47m
* github: https://github.com/saquibshaikh14
* copyright ${YEAR}
**/

// import loadConfiguration from 'common/loadConfiguration';
// import logger from 'common/logger';
import express from 'express';
import http from 'http';
import loadConfiguration from './common/loadConfiguration';

const app = express();
// try{
//     throw new Error("sjnijn")
// }catch(e){
//     logger.error(e);
// }
//load configuration
loadConfiguration(app); //load local file into configuration like nconf or loading env file etc. load loggers

//creating http server
const httpServer = http.createServer(app);
httpServer.listen(3000);

//can be created https server also