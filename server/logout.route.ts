import { sessionStore } from './session-store';
import { Request, Response } from 'express';

export function logout(req: Request, res: Response) {

    const sessionId = req.cookies['SESSIONID'];

    sessionStore.destroySession(sessionId);

    res.clearCookie('SESSIONID');

    res.status(200).json({});
}