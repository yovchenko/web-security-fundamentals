import * as express from 'express';
import {Request, Response, NextFunction} from 'express';
import {Application} from "express";
const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');
import * as fs from 'fs';
import * as https from 'https';
import {readAllLessons} from "./read-all-lessons.route";
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean,  defaultOption: true },
];

const options = commandLineArgs(optionDefinitions);

const checkIfAuthenticated = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksUri: 'https://dev-abbm6k2d.eu.auth0.com/.well-known/jwks.json'
    }),
    algorithms: ['RS256']
});

app.use(checkIfAuthenticated);

app.use((err: { name: string; status: number; message: string; }, 
    req: Request, 
    res: Response, 
    next: NextFunction) => {
        if(err && err.name === "UnauthorizedError"){
            res.status(err.status).json({message: err.message})
        } else next();
});

// REST API
app.route('/api/lessons')
    .get(readAllLessons);


if (options.secure) {

    const httpsServer = https.createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app);

    // launch an HTTPS Server. Note: this does NOT mean that the application is secure
    httpsServer.listen(9000, () => console.log("HTTPS Secure Server running at https://localhost:" + httpsServer.address().port));

}
else {

    // launch an HTTP Server
    const httpServer = app.listen(9000, () => {
        console.log("HTTP Server running at https://localhost:" + httpServer.address().port);
    });

}

