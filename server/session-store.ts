import { User } from "../src/app/model/user";
import { Session } from "./session";

class SessionStore {
    private sessions: {[ket:string]: Session} = {};

    createSession(sessionId: string, user: User){
        this.sessions[sessionId] = new Session(sessionId, user); 
    }

    findUserBySessionId(sessionId: string) {
        const session = this.sessions[sessionId];

        const isSessionValid = session && session.isValid();

        return this.isSessionValid(sessionId) ? session.user : null;
    }
    isSessionValid(sessionId: string): boolean {
        const session = this.sessions[sessionId];
        return session && session.isValid();
    }
    destroySession(sessionId: string) {
        delete this.sessions[sessionId];
    }
}

export const sessionStore = new SessionStore();
