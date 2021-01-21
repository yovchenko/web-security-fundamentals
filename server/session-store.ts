import { User } from "../src/app/model/user";
import { Session } from "./session";

class SessionStore {
    private sessions: {[ket:string]: Session} = {};

    createSession(sessionId: string, user: User){
        this.sessions[sessionId] = new Session(sessionId, user); 
    }
}

export const sessionStore = new SessionStore();
