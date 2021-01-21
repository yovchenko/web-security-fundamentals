"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var session_1 = require("./session");
var SessionStore = /** @class */ (function () {
    function SessionStore() {
        this.sessions = {};
    }
    SessionStore.prototype.createSession = function (sessionId, user) {
        this.sessions[sessionId] = new session_1.Session(sessionId, user);
    };
    return SessionStore;
}());
exports.sessionStore = new SessionStore();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9zZXNzaW9uLXN0b3JlLnRzIiwic291cmNlcyI6WyIvaG9tZS95b3ZjaGVua28vUHJvamVjdHMvYW5ndWxhci1zZWN1cml0eS1jb3Vyc2Uvc2VydmVyL3Nlc3Npb24tc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxQ0FBb0M7QUFFcEM7SUFBQTtRQUNZLGFBQVEsR0FBNEIsRUFBRSxDQUFDO0lBS25ELENBQUM7SUFIRyxvQ0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxJQUFVO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQUVZLFFBQUEsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NyYy9hcHAvbW9kZWwvdXNlclwiO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCIuL3Nlc3Npb25cIjtcblxuY2xhc3MgU2Vzc2lvblN0b3JlIHtcbiAgICBwcml2YXRlIHNlc3Npb25zOiB7W2tldDpzdHJpbmddOiBTZXNzaW9ufSA9IHt9O1xuXG4gICAgY3JlYXRlU2Vzc2lvbihzZXNzaW9uSWQ6IHN0cmluZywgdXNlcjogVXNlcil7XG4gICAgICAgIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklkXSA9IG5ldyBTZXNzaW9uKHNlc3Npb25JZCwgdXNlcik7IFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdG9yZSA9IG5ldyBTZXNzaW9uU3RvcmUoKTtcbiJdfQ==