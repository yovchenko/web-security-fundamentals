import {Response,Request,NextFunction} from 'express';
import { decodeJwt } from './security.utils';


export function retrieveUserIdFromRequest(
    req: Request, 
    res: Response, 
    next: NextFunction){

        const jwt = req.cookies["SESSIONID"];

        if(jwt) {
            handleSessionCookie(jwt, req)
            .catch(error => console.error(error));
        }
        next();
}

async function handleSessionCookie(jwt: string, req: Request) {
    try {   
        const payload = await decodeJwt(jwt);
        req["userId"] = payload.sub;
    } catch (error) {
        console.error("Could not extract user from the request", error)
    }  
}