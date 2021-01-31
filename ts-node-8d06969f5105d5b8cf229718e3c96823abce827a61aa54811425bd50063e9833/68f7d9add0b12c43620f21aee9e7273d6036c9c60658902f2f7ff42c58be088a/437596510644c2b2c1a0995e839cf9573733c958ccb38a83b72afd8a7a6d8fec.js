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
var util = require('util');
var crypto = require('crypto');
var jwt = require("jsonwebtoken");
var fs = require("fs");
exports.randomBytes = util.promisify(crypto.randomBytes);
exports.signJwt = util.promisify(jwt.sign);
var RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');
var RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');
var SESSION_DURATION = 1000 * 60 * 10;
function createSessionToken(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, exports.signJwt({}, RSA_PRIVATE_KEY, {
                    algorithm: 'RS256',
                    expiresIn: SESSION_DURATION,
                    subject: userId
                })];
        });
    });
}
exports.createSessionToken = createSessionToken;
function decodeJwt(token) {
    return __awaiter(this, void 0, void 0, function () {
        var payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, jwt.verify(token, RSA_PUBLIC_KEY)];
                case 1:
                    payload = _a.sent();
                    console.log("Decoded Jwt payload", payload);
                    return [2 /*return*/, payload];
            }
        });
    });
}
exports.decodeJwt = decodeJwt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9zZWN1cml0eS51dGlscy50cyIsInNvdXJjZXMiOlsiL2hvbWUveW92Y2hlbmtvL1Byb2plY3RzL2FuZ3VsYXItc2VjdXJpdHktY291cnNlL3NlcnZlci9zZWN1cml0eS51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxrQ0FBb0M7QUFDcEMsdUJBQXlCO0FBSVosUUFBQSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFakQsUUFBQSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEQsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRS9ELElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUU3RCxJQUFNLGdCQUFnQixHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXhDLFNBQXNCLGtCQUFrQixDQUFDLE1BQWM7OztZQUMvQyxzQkFBTyxlQUFPLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRTtvQkFDaEMsU0FBUyxFQUFFLE9BQU87b0JBQ2xCLFNBQVMsRUFBRSxnQkFBZ0I7b0JBQzNCLE9BQU8sRUFBRSxNQUFNO2lCQUNsQixDQUFDLEVBQUM7OztDQUNWO0FBTkQsZ0RBTUM7QUFFRCxTQUFzQixTQUFTLENBQUMsS0FBYTs7Ozs7d0JBRXpCLHFCQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxFQUFBOztvQkFBakQsT0FBTyxHQUFHLFNBQXVDO29CQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUU1QyxzQkFBTyxPQUFPLEVBQUM7Ozs7Q0FDbEI7QUFQRCw4QkFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcblxuXG5cbmV4cG9ydCBjb25zdCByYW5kb21CeXRlcyA9IHV0aWwucHJvbWlzaWZ5KGNyeXB0by5yYW5kb21CeXRlcyk7XG5cbmV4cG9ydCBjb25zdCBzaWduSnd0ID0gdXRpbC5wcm9taXNpZnkoand0LnNpZ24pO1xuXG5jb25zdCBSU0FfUFJJVkFURV9LRVkgPSBmcy5yZWFkRmlsZVN5bmMoJy4vZGVtb3MvcHJpdmF0ZS5rZXknKTtcblxuY29uc3QgUlNBX1BVQkxJQ19LRVkgPSBmcy5yZWFkRmlsZVN5bmMoJy4vZGVtb3MvcHVibGljLmtleScpO1xuXG5jb25zdCBTRVNTSU9OX0RVUkFUSU9OID0gMTAwMCAqIDYwICogMTA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uVG9rZW4odXNlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHNpZ25Kd3Qoe30sIFJTQV9QUklWQVRFX0tFWSwge1xuICAgICAgICAgICAgYWxnb3JpdGhtOiAnUlMyNTYnLFxuICAgICAgICAgICAgZXhwaXJlc0luOiBTRVNTSU9OX0RVUkFUSU9OLFxuICAgICAgICAgICAgc3ViamVjdDogdXNlcklkXG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVjb2RlSnd0KHRva2VuOiBzdHJpbmcpIHtcblxuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBqd3QudmVyaWZ5KHRva2VuLCBSU0FfUFVCTElDX0tFWSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkRlY29kZWQgSnd0IHBheWxvYWRcIiwgcGF5bG9hZCk7XG5cbiAgICByZXR1cm4gcGF5bG9hZDtcbn0iXX0=