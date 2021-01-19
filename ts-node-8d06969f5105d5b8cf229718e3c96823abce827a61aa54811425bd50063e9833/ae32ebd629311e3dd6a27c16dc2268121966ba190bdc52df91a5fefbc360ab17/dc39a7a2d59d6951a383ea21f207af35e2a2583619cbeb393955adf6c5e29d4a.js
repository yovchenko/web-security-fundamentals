"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var database_data_1 = require("./database-data");
var InMemoryDatabase = /** @class */ (function () {
    function InMemoryDatabase() {
        this.userCounter = 0;
    }
    InMemoryDatabase.prototype.readAllLessons = function () {
        return _.values(database_data_1.LESSONS);
    };
    InMemoryDatabase.prototype.createUser = function (email, passwordDigest) {
        this.userCounter++;
        var id = this.userCounter;
        var user = {
            id: id,
            email: email,
            passwordDigest: passwordDigest,
        };
        database_data_1.USERS[id] = user;
        return user;
    };
    return InMemoryDatabase;
}());
exports.db = new InMemoryDatabase();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9kYXRhYmFzZS50cyIsInNvdXJjZXMiOlsiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBCQUE0QjtBQUM1QixpREFBK0M7QUFJL0M7SUFBQTtRQUVJLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBeUJwQixDQUFDO0lBdkJHLHlDQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsdUJBQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFHRCxxQ0FBVSxHQUFWLFVBQVcsS0FBWSxFQUFDLGNBQXFCO1FBRXpDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRTVCLElBQU0sSUFBSSxHQUFXO1lBQ2pCLEVBQUUsSUFBQTtZQUNGLEtBQUssT0FBQTtZQUNMLGNBQWMsZ0JBQUE7U0FDakIsQ0FBQztRQUVGLHFCQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFFTCx1QkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUFFWSxRQUFBLEVBQUUsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7TEVTU09OUywgVVNFUlN9IGZyb20gXCIuL2RhdGFiYXNlLWRhdGFcIjtcbmltcG9ydCB7RGJVc2VyfSBmcm9tIFwiLi9kYi11c2VyXCI7XG5cblxuY2xhc3MgSW5NZW1vcnlEYXRhYmFzZSB7XG5cbiAgICB1c2VyQ291bnRlciA9IDA7XG5cbiAgICByZWFkQWxsTGVzc29ucygpIHtcbiAgICAgICAgcmV0dXJuIF8udmFsdWVzKExFU1NPTlMpO1xuICAgIH1cblxuXG4gICAgY3JlYXRlVXNlcihlbWFpbDpzdHJpbmcscGFzc3dvcmREaWdlc3Q6c3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy51c2VyQ291bnRlcisrO1xuXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy51c2VyQ291bnRlcjtcblxuICAgICAgICBjb25zdCB1c2VyOiBEYlVzZXIgPSB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmREaWdlc3QsXG4gICAgICAgIH07XG5cbiAgICAgICAgVVNFUlNbaWRdID0gdXNlcjtcblxuICAgICAgICByZXR1cm4gdXNlcjtcblxuICAgIH1cblxufVxuXG5leHBvcnQgY29uc3QgZGIgPSBuZXcgSW5NZW1vcnlEYXRhYmFzZSgpOyJdfQ==