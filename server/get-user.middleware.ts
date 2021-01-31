import {Response,Request,NextFunction} from 'express';
import { decodeJwt } from './security.utils';


export function retrieveUserIdFromRequest(
    req: Request, 
    res: Response, 
    next: NextFunction){

        const jwt = req.cookies["SESSIONID"];

        if(jwt) {
            handleSessionCookie(jwt, req)
            .then(() => { next() })
            .catch(error => { 
                console.error(error) 
                next()
            });
        } else next();
}

async function handleSessionCookie(jwt: string, req: Request) {
    try {   
        const payload = await decodeJwt(jwt);
        Object.defineProperty(req, "userId", {
            value: payload.sub,
            enumerable: true,
            configurable: true,
            writable: false,
          });
    } catch (error) {
        console.error("Could not extract user from the request", error)
    }  
}