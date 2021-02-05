
import {Request, Response} from "express";
import {db} from "./database";
import * as argon2 from 'argon2';
import {validatePassword} from "./password-validation";
import {createCsrfToken, createSessionToken} from "./security.utils";

export function createUser(req: Request, res:Response) {

    const credentials = req.body;

    const errors = validatePassword(credentials.password);

    if (errors.length > 0) {
        res.status(400).json({errors});
    }
    else {

        createUserAndSession(res, credentials)
            .catch(() => { res.sendStatus(500)});

    }

}

async function createUserAndSession(res:Response, credentials) {

    const passwordDigest = await argon2.hash(credentials.password);

    const user = db.createUser(credentials.email, passwordDigest);
 
    const sessionToken = await createSessionToken(String(user.id));

    const csrfToken = await createCsrfToken(sessionToken);
    
    res.cookie("SESSIONID", sessionToken, {httpOnly:true, secure:true});

    res.cookie("CSRF-TOKEN", csrfToken);

    res.status(200).json({id:user.id, email:user.email});
}






