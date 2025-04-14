"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var axios_1 = require("axios");
var userBloodGroup;
(function (userBloodGroup) {
    userBloodGroup["BPLUS"] = "B+";
    userBloodGroup["BMINUS"] = "B-";
    userBloodGroup["APLUS"] = "A+";
    userBloodGroup["AMINUS"] = "A-";
    userBloodGroup["OMINUS"] = "O-";
    userBloodGroup["OPLUS"] = "O+";
})(userBloodGroup || (userBloodGroup = {}));
var colors;
(function (colors) {
    colors["RED"] = "Red";
    colors["GREEN"] = "Green";
    colors["GRAY"] = "Gray";
    colors["BLUE"] = "Blue";
    colors["PURPLE"] = "Purple";
    colors["BROWN"] = "Brown";
})(colors || (colors = {}));
var hairType;
(function (hairType) {
    hairType["CURLE"] = "curle";
    hairType["STRAIGHT"] = "Straight";
    hairType["WAVY"] = "wavy";
    hairType["KINKY"] = "kinky";
})(hairType || (hairType = {}));
var cardType;
(function (cardType) {
    cardType["DISCOVER"] = "discover";
    cardType["MAESTRO"] = "maestro";
    cardType["MIR"] = "mir";
    cardType["CARTEBANCAIRE"] = "Carte Bancaire";
    cardType["UNIONPAY"] = "UnionPay";
})(cardType || (cardType = {}));
var companyDepartament;
(function (companyDepartament) {
    companyDepartament["TRAINING"] = "Training";
    companyDepartament["HUMANRESOURSES"] = "Human Resources";
    companyDepartament["LEGAL"] = "LEGAL";
    companyDepartament["ENGINEERING"] = "Engineering";
    companyDepartament["SALES"] = "sales";
})(companyDepartament || (companyDepartament = {}));
var cryptoCoin;
(function (cryptoCoin) {
    cryptoCoin["BITCOIN"] = "bitcoin";
})(cryptoCoin || (cryptoCoin = {}));
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "admin";
    userRole["MODERATOR"] = "moderator";
    userRole["USER"] = "user";
})(userRole || (userRole = {}));
var apiUrl = 'https://dummyjson.com/users';
function getUsersRequest() {
    return __awaiter(this, void 0, void 0, function () {
        var response, users, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get(apiUrl)];
                case 1:
                    response = _a.sent();
                    users = response.data;
                    return [2 /*return*/, users];
                case 2:
                    e_1 = _a.sent();
                    if (e_1 instanceof axios_1.AxiosError) {
                        throw new Error(e_1.message);
                    }
                    else {
                        throw new Error('Неизвестная ошибка');
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
console.log(getUsersRequest());
