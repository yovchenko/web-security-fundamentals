"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var Session = /** @class */ (function () {
    function Session(sessionId, user) {
        this.sessionId = sessionId;
        this.user = user;
        this.validUntil = moment_1.default().add(Session.VALIDITY_MINUTES, 'minutes');
    }
    Session.prototype.isValid = function () {
        return moment_1.default().diff(this.validUntil, 'minutes') <= 0;
    };
    Session.VALIDITY_MINUTES = 2;
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9zZXNzaW9uLnRzIiwic291cmNlcyI6WyIvaG9tZS95b3ZjaGVua28vUHJvamVjdHMvYW5ndWxhci1zZWN1cml0eS1jb3Vyc2Uvc2VydmVyL3Nlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxpQ0FBNEI7QUFHNUI7SUFJSSxpQkFDVyxTQUFpQixFQUNqQixJQUFVO1FBRFYsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRWpCLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDSSxPQUFPLGdCQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVplLHdCQUFnQixHQUFHLENBQUMsQ0FBQztJQWF6QyxjQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vc3JjL2FwcC9tb2RlbC91c2VyJztcblxuZXhwb3J0IGNsYXNzIFNlc3Npb24ge1xuICAgIHN0YXRpYyByZWFkb25seSBWQUxJRElUWV9NSU5VVEVTID0gMjtcbiAgICBwcml2YXRlIHZhbGlkVW50aWw6IE1vbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB1c2VyOiBVc2VyXG4gICAgKSB7XG4gICAgICAgIHRoaXMudmFsaWRVbnRpbCA9IG1vbWVudCgpLmFkZChTZXNzaW9uLlZBTElESVRZX01JTlVURVMsICdtaW51dGVzJyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLmRpZmYodGhpcy52YWxpZFVudGlsLCAnbWludXRlcycpIDw9IDA7XG4gICAgfVxufSJdfQ==