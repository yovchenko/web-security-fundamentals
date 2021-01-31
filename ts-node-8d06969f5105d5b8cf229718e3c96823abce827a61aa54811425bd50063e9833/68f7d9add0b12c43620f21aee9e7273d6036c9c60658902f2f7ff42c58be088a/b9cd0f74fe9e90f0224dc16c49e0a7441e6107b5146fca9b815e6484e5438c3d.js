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
function retrieveUserIdFromRequest(req, res, next) {
    var jwt = req.cookies["SESSIONID"];
    if (jwt) {
        handleSessionCookie(jwt, req)
            .then(function () { next(); })
            .catch(function (error) {
            console.error(error);
            next();
        });
    }
}
exports.retrieveUserIdFromRequest = retrieveUserIdFromRequest;
function handleSessionCookie(jwt, req) {
    return __awaiter(this, void 0, void 0, function () {
        var payload, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, security_utils_1.decodeJwt(jwt)];
                case 1:
                    payload = _a.sent();
                    Object.defineProperty(req, "userId", {
                        value: payload.sub,
                        enumerable: true,
                        configurable: true,
                        writable: false,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Could not extract user from the request", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9nZXQtdXNlci5taWRkbGV3YXJlLnRzIiwic291cmNlcyI6WyIvaG9tZS95b3ZjaGVua28vUHJvamVjdHMvYW5ndWxhci1zZWN1cml0eS1jb3Vyc2Uvc2VydmVyL2dldC11c2VyLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1EQUE2QztBQUc3QyxTQUFnQix5QkFBeUIsQ0FDckMsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjtJQUVkLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFckMsSUFBRyxHQUFHLEVBQUU7UUFDSixtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQzVCLElBQUksQ0FBQyxjQUFRLElBQUksRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3BCLElBQUksRUFBRSxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUM7S0FDTjtBQUNULENBQUM7QUFmRCw4REFlQztBQUVELFNBQWUsbUJBQW1CLENBQUMsR0FBVyxFQUFFLEdBQVk7Ozs7Ozs7b0JBRXBDLHFCQUFNLDBCQUFTLENBQUMsR0FBRyxDQUFDLEVBQUE7O29CQUE5QixPQUFPLEdBQUcsU0FBb0I7b0JBQ3BDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRTt3QkFDakMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHO3dCQUNsQixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLFFBQVEsRUFBRSxLQUFLO3FCQUNoQixDQUFDLENBQUM7Ozs7b0JBRUwsT0FBTyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxPQUFLLENBQUMsQ0FBQTs7Ozs7O0NBRXRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZXNwb25zZSxSZXF1ZXN0LE5leHRGdW5jdGlvbn0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBkZWNvZGVKd3QgfSBmcm9tICcuL3NlY3VyaXR5LnV0aWxzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVVc2VySWRGcm9tUmVxdWVzdChcbiAgICByZXE6IFJlcXVlc3QsIFxuICAgIHJlczogUmVzcG9uc2UsIFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbil7XG5cbiAgICAgICAgY29uc3Qgand0ID0gcmVxLmNvb2tpZXNbXCJTRVNTSU9OSURcIl07XG5cbiAgICAgICAgaWYoand0KSB7XG4gICAgICAgICAgICBoYW5kbGVTZXNzaW9uQ29va2llKGp3dCwgcmVxKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4geyBuZXh0KCkgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpIFxuICAgICAgICAgICAgICAgIG5leHQoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2Vzc2lvbkNvb2tpZShqd3Q6IHN0cmluZywgcmVxOiBSZXF1ZXN0KSB7XG4gICAgdHJ5IHsgICBcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGRlY29kZUp3dChqd3QpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxLCBcInVzZXJJZFwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogcGF5bG9hZC5zdWIsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZXh0cmFjdCB1c2VyIGZyb20gdGhlIHJlcXVlc3RcIiwgZXJyb3IpXG4gICAgfSAgXG59Il19