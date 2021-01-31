"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var argon2 = require("argon2");
function login(req, res) {
    var credentials = req.body;
    var user = database_1.db.findUserByEmail(credentials.email);
    if (!user) {
        res.sendStatus(403);
    }
    else {
        loginAndBuildResponse(credentials, user, res);
    }
}
exports.login = login;
function loginAndBuildResponse(credentials, user, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sessionToken, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, attemptLogin(credentials, user)];
                case 1:
                    sessionToken = _a.sent();
                    console.log("Login successful");
                    res.cookie("SESSIONID", sessionToken, { httpOnly: true, secure: true });
                    res.status(200).json({ id: user.id, email: user.email });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log("Login failed!");
                    res.sendStatus(403);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function attemptLogin(credentials, user) {
    return __awaiter(this, void 0, void 0, function () {
        var isPasswordValid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, argon2.verify(user.passwordDigest, credentials.password)];
                case 1:
                    isPasswordValid = _a.sent();
                    if (!isPasswordValid) {
                        throw new Error("Password Invalid");
                    }
                    //TODO return JWT
                    return [2 /*return*/, 1];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9sb2dpbi5yb3V0ZS50cyIsInNvdXJjZXMiOlsiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9sb2dpbi5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsdUNBQThCO0FBQzlCLCtCQUFpQztBQUtqQyxTQUFnQixLQUFLLENBQUMsR0FBWSxFQUFFLEdBQWE7SUFFN0MsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUU3QixJQUFNLElBQUksR0FBRyxhQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuRCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1AsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN2QjtTQUNJO1FBQ0QscUJBQXFCLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNqRDtBQUVMLENBQUM7QUFiRCxzQkFhQztBQUVELFNBQWUscUJBQXFCLENBQUMsV0FBZSxFQUFFLElBQVcsRUFBRyxHQUFhOzs7Ozs7O29CQUlwRCxxQkFBTSxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFBOztvQkFBcEQsWUFBWSxHQUFHLFNBQXFDO29CQUUxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBRWhDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7b0JBRXBFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDOzs7O29CQUtyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUU3QixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Q0FFM0I7QUFHRCxTQUFlLFlBQVksQ0FBQyxXQUFlLEVBQUUsSUFBVzs7Ozs7d0JBRTVCLHFCQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFDbkIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFBOztvQkFEM0QsZUFBZSxHQUFHLFNBQ3lDO29CQUVqRSxJQUFJLENBQUMsZUFBZSxFQUFFO3dCQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7cUJBQ3ZDO29CQUVELGlCQUFpQjtvQkFDakIsc0JBQU8sQ0FBQyxFQUFDOzs7O0NBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHtSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7ZGJ9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5pbXBvcnQgKiBhcyBhcmdvbjIgZnJvbSAnYXJnb24yJztcbmltcG9ydCB7RGJVc2VyfSBmcm9tIFwiLi9kYi11c2VyXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4ocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG5cbiAgICBjb25zdCBjcmVkZW50aWFscyA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgdXNlciA9IGRiLmZpbmRVc2VyQnlFbWFpbChjcmVkZW50aWFscy5lbWFpbCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmVzLnNlbmRTdGF0dXMoNDAzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvZ2luQW5kQnVpbGRSZXNwb25zZShjcmVkZW50aWFscywgdXNlciwgcmVzKTtcbiAgICB9XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9naW5BbmRCdWlsZFJlc3BvbnNlKGNyZWRlbnRpYWxzOmFueSwgdXNlcjpEYlVzZXIsICByZXM6IFJlc3BvbnNlKSB7XG5cbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb25Ub2tlbiA9IGF3YWl0IGF0dGVtcHRMb2dpbihjcmVkZW50aWFscywgdXNlcik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBzdWNjZXNzZnVsXCIpO1xuXG4gICAgICAgIHJlcy5jb29raWUoXCJTRVNTSU9OSURcIiwgc2Vzc2lvblRva2VuLCB7aHR0cE9ubHk6dHJ1ZSwgc2VjdXJlOnRydWV9KTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7aWQ6dXNlci5pZCwgZW1haWw6dXNlci5lbWFpbH0pO1xuXG4gICAgfVxuICAgIGNhdGNoKGVycikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gZmFpbGVkIVwiKTtcblxuICAgICAgICByZXMuc2VuZFN0YXR1cyg0MDMpO1xuICAgIH1cbn1cblxuXG5hc3luYyBmdW5jdGlvbiBhdHRlbXB0TG9naW4oY3JlZGVudGlhbHM6YW55LCB1c2VyOkRiVXNlcikge1xuXG4gICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYXJnb24yLnZlcmlmeSh1c2VyLnBhc3N3b3JkRGlnZXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuXG4gICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFzc3dvcmQgSW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICAvL1RPRE8gcmV0dXJuIEpXVFxuICAgIHJldHVybiAxO1xufVxuXG5cblxuXG5cblxuIl19