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
                    res.status(200).json({ id: user.id, email: user.email });
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9jcmVhdGUtdXNlci5yb3V0ZS50cyIsInNvdXJjZXMiOlsiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9jcmVhdGUtdXNlci5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQStDO0FBRS9DLHVDQUE4QjtBQUU5QiwrQkFBaUM7QUFDakMsNkRBQXVEO0FBSXZELFNBQWdCLFVBQVUsQ0FBQyxHQUFZLEVBQUUsR0FBWTtJQUVqRCxJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRTdCLElBQU0sTUFBTSxHQUFHLHNDQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxRQUFBLEVBQUMsQ0FBQyxDQUFDO0tBQ2xDO1NBQ0k7UUFDRCxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDMUM7QUFDTCxDQUFDO0FBWkQsZ0NBWUM7QUFFRCxTQUFlLG9CQUFvQixDQUFDLEdBQWEsRUFDN0MsV0FBMEQ7Ozs7O3dCQUNuQyxxQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBQTs7b0JBQXhELGNBQWMsR0FBRyxTQUF1QztvQkFDeEQsSUFBSSxHQUFHLGFBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFDNUMscUJBQU0sNEJBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUFDLEVBQUE7O29CQUF0RSxTQUFTLEdBQUcsU0FBMEQ7b0JBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQzs7Ozs7Q0FDeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5kb21CeXRlcyB9IGZyb20gJy4vc2VjdXJpdHkudXRpbHMnO1xuaW1wb3J0IHtSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7ZGJ9IGZyb20gXCIuL2RhdGFiYXNlXCI7XG5pbXBvcnQge1VTRVJTfSBmcm9tIFwiLi9kYXRhYmFzZS1kYXRhXCI7XG5pbXBvcnQgKiBhcyBhcmdvbjIgZnJvbSAnYXJnb24yJztcbmltcG9ydCB7dmFsaWRhdGVQYXNzd29yZH0gZnJvbSBcIi4vcGFzc3dvcmQtdmFsaWRhdGlvblwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXIocmVxOiBSZXF1ZXN0LCByZXM6UmVzcG9uc2UpIHtcblxuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0ZVBhc3N3b3JkKGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyb3JzfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjcmVhdGVVc2VyQW5kU2Vzc2lvbihyZXMsIGNyZWRlbnRpYWxzKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJBbmRTZXNzaW9uKHJlczogUmVzcG9uc2UsIFxuICAgIGNyZWRlbnRpYWxzOiB7IHBhc3N3b3JkOiBzdHJpbmcgfCBCdWZmZXI7IGVtYWlsOiBzdHJpbmc7IH0pIHtcbiAgICBjb25zdCBwYXNzd29yZERpZ2VzdCA9IGF3YWl0IGFyZ29uMi5oYXNoKGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICBjb25zdCB1c2VyID0gZGIuY3JlYXRlVXNlcihjcmVkZW50aWFscy5lbWFpbCwgcGFzc3dvcmREaWdlc3QpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IGF3YWl0IHJhbmRvbUJ5dGVzKDMyKS50aGVuKGJ5dGVzID0+IGJ5dGVzLnRvU3RyaW5nKCdoZXgnKSk7XG4gICAgY29uc29sZS5sb2coXCJzZXNzaW9uSWRcIiwgc2Vzc2lvbklkKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7aWQ6dXNlci5pZCwgZW1haWw6dXNlci5lbWFpbH0pO1xufSJdfQ==