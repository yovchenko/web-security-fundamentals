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
        var usersPerEmail = _.keyBy(_.values(database_data_1.USERS), "email");
        if (usersPerEmail[email]) {
            var message = "An user already exists with email " + email;
            console.error(message);
            throw new Error(message);
        }
        this.userCounter++;
        var id = this.userCounter;
        var user = {
            id: id,
            email: email,
            passwordDigest: passwordDigest
        };
        database_data_1.USERS[id] = user;
        console.log(database_data_1.USERS);
        return user;
    };
    InMemoryDatabase.prototype.findUserByEmail = function (email) {
        var users = _.values(database_data_1.USERS);
        return _.find(users, function (user) { return user.email === email; });
    };
    return InMemoryDatabase;
}());
exports.db = new InMemoryDatabase();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9kYXRhYmFzZS50cyIsInNvdXJjZXMiOlsiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9kYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBCQUE0QjtBQUM1QixpREFBK0M7QUFJL0M7SUFBQTtRQUVJLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0lBeUNwQixDQUFDO0lBdkNHLHlDQUFjLEdBQWQ7UUFDSSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsdUJBQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsS0FBWSxFQUFDLGNBQXFCO1FBRXpDLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBSyxDQUFDLEVBQUUsT0FBTyxDQUFFLENBQUM7UUFFMUQsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBTSxPQUFPLEdBQUcsb0NBQW9DLEdBQUcsS0FBSyxDQUFDO1lBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRTVCLElBQU0sSUFBSSxHQUFXO1lBQ2pCLEVBQUUsSUFBQTtZQUNGLEtBQUssT0FBQTtZQUNMLGNBQWMsZ0JBQUE7U0FDakIsQ0FBQztRQUVGLHFCQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQUssQ0FBQyxDQUFDO1FBRW5CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHRCwwQ0FBZSxHQUFmLFVBQWdCLEtBQVk7UUFFeEIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBSyxDQUFDLENBQUM7UUFFOUIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQUtZLFFBQUEsRUFBRSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtMRVNTT05TLCBVU0VSU30gZnJvbSBcIi4vZGF0YWJhc2UtZGF0YVwiO1xuaW1wb3J0IHtEYlVzZXJ9IGZyb20gXCIuL2RiLXVzZXJcIjtcblxuXG5jbGFzcyBJbk1lbW9yeURhdGFiYXNlIHtcblxuICAgIHVzZXJDb3VudGVyID0gMDtcblxuICAgIHJlYWRBbGxMZXNzb25zKCkge1xuICAgICAgICByZXR1cm4gXy52YWx1ZXMoTEVTU09OUyk7XG4gICAgfVxuXG4gICAgY3JlYXRlVXNlcihlbWFpbDpzdHJpbmcscGFzc3dvcmREaWdlc3Q6c3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgdXNlcnNQZXJFbWFpbCA9IF8ua2V5QnkoIF8udmFsdWVzKFVTRVJTKSwgXCJlbWFpbFwiICk7XG5cbiAgICAgICAgaWYgKHVzZXJzUGVyRW1haWxbZW1haWxdKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJBbiB1c2VyIGFscmVhZHkgZXhpc3RzIHdpdGggZW1haWwgXCIgKyBlbWFpbDtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVzZXJDb3VudGVyKys7XG5cbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnVzZXJDb3VudGVyO1xuXG4gICAgICAgIGNvbnN0IHVzZXI6IERiVXNlciA9IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZERpZ2VzdFxuICAgICAgICB9O1xuXG4gICAgICAgIFVTRVJTW2lkXSA9IHVzZXI7XG5cbiAgICAgICAgY29uc29sZS5sb2coVVNFUlMpO1xuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cblxuXG4gICAgZmluZFVzZXJCeUVtYWlsKGVtYWlsOnN0cmluZykgOkRiVXNlciB7XG5cbiAgICAgICAgY29uc3QgdXNlcnMgPSBfLnZhbHVlcyhVU0VSUyk7XG5cbiAgICAgICAgcmV0dXJuIF8uZmluZCh1c2VycywgdXNlciA9PiB1c2VyLmVtYWlsID09PSBlbWFpbCk7XG4gICAgfVxuXG59XG5cblxuXG5cbmV4cG9ydCBjb25zdCBkYiA9IG5ldyBJbk1lbW9yeURhdGFiYXNlKCk7XG5cblxuIl19