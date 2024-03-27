// types/express.d.ts

import { Logger } from 'pino';
import { AdditionalProps } from './server.types';

declare global {
    namespace Express {
        interface Request {
            additionalProps: AdditionalProps;
        }
    }
}
