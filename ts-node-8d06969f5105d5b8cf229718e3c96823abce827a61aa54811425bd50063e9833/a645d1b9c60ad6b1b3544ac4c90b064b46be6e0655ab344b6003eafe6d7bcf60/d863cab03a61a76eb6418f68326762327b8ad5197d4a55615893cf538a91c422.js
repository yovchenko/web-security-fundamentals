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
var security_utils_1 = require("./security.utils");
var database_1 = require("./database");
var argon2 = require("argon2");
var password_validation_1 = require("./password-validation");
var session_store_1 = require("./session-store");
function createUser(req, res) {
    var credentials = req.body;
    var errors = password_validation_1.validatePassword(credentials.password);
    if (errors.length > 0) {
        res.status(400).json({ errors: errors });
    }
    else {
        createUserAndSession(res, credentials);
    }
}
exports.createUser = createUser;
function createUserAndSession(res, credentials) {
    return __awaiter(this, void 0, void 0, function () {
        var passwordDigest, user, sessionId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, argon2.hash(credentials.password)];
                case 1:
                    passwordDigest = _a.sent();
                    user = database_1.db.createUser(credentials.email, passwordDigest);
                    return [4 /*yield*/, security_utils_1.randomBytes(32).then(function (bytes) { return bytes.toString('hex'); })];
                case 2:
                    sessionId = _a.sent();
                    console.log("sessionId", sessionId);
                    session_store_1.sessionStore.createSession(sessionId, user);
                    res.cookie("SESSIONID", sessionId);
                    res.status(200).json({ id: user.id, email: user.email });
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9jcmVhdGUtdXNlci5yb3V0ZS50cyIsInNvdXJjZXMiOlsiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9jcmVhdGUtdXNlci5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQStDO0FBRS9DLHVDQUE4QjtBQUU5QiwrQkFBaUM7QUFDakMsNkRBQXVEO0FBQ3ZELGlEQUErQztBQUkvQyxTQUFnQixVQUFVLENBQUMsR0FBWSxFQUFFLEdBQVk7SUFFakQsSUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUU3QixJQUFNLE1BQU0sR0FBRyxzQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQztLQUNsQztTQUNJO1FBQ0Qsb0JBQW9CLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQzFDO0FBQ0wsQ0FBQztBQVpELGdDQVlDO0FBRUQsU0FBZSxvQkFBb0IsQ0FBQyxHQUFhLEVBQzdDLFdBQTBEOzs7Ozt3QkFDbkMscUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUE7O29CQUF4RCxjQUFjLEdBQUcsU0FBdUM7b0JBQ3hELElBQUksR0FBRyxhQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQzVDLHFCQUFNLDRCQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxFQUFBOztvQkFBdEUsU0FBUyxHQUFHLFNBQTBEO29CQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDcEMsNEJBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM1QyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDbkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7Ozs7O0NBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFuZG9tQnl0ZXMgfSBmcm9tICcuL3NlY3VyaXR5LnV0aWxzJztcbmltcG9ydCB7UmVxdWVzdCwgUmVzcG9uc2V9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQge2RifSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuaW1wb3J0IHtVU0VSU30gZnJvbSBcIi4vZGF0YWJhc2UtZGF0YVwiO1xuaW1wb3J0ICogYXMgYXJnb24yIGZyb20gJ2FyZ29uMic7XG5pbXBvcnQge3ZhbGlkYXRlUGFzc3dvcmR9IGZyb20gXCIuL3Bhc3N3b3JkLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IHNlc3Npb25TdG9yZSB9IGZyb20gJy4vc2Vzc2lvbi1zdG9yZSc7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXNlcihyZXE6IFJlcXVlc3QsIHJlczpSZXNwb25zZSkge1xuXG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IGVycm9ycyA9IHZhbGlkYXRlUGFzc3dvcmQoY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcnN9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNyZWF0ZVVzZXJBbmRTZXNzaW9uKHJlcywgY3JlZGVudGlhbHMpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlckFuZFNlc3Npb24ocmVzOiBSZXNwb25zZSwgXG4gICAgY3JlZGVudGlhbHM6IHsgcGFzc3dvcmQ6IHN0cmluZyB8IEJ1ZmZlcjsgZW1haWw6IHN0cmluZzsgfSkge1xuICAgIGNvbnN0IHBhc3N3b3JkRGlnZXN0ID0gYXdhaXQgYXJnb24yLmhhc2goY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICAgIGNvbnN0IHVzZXIgPSBkYi5jcmVhdGVVc2VyKGNyZWRlbnRpYWxzLmVtYWlsLCBwYXNzd29yZERpZ2VzdCk7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gYXdhaXQgcmFuZG9tQnl0ZXMoMzIpLnRoZW4oYnl0ZXMgPT4gYnl0ZXMudG9TdHJpbmcoJ2hleCcpKTtcbiAgICBjb25zb2xlLmxvZyhcInNlc3Npb25JZFwiLCBzZXNzaW9uSWQpO1xuICAgIHNlc3Npb25TdG9yZS5jcmVhdGVTZXNzaW9uKHNlc3Npb25JZCwgdXNlcik7XG4gICAgcmVzLmNvb2tpZShcIlNFU1NJT05JRFwiLCBzZXNzaW9uSWQpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtpZDp1c2VyLmlkLCBlbWFpbDp1c2VyLmVtYWlsfSk7XG59Il19