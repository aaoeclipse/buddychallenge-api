"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service = __importStar(require("../../services/user/userService"));
const router = express_1.default.Router();
router.post('/login', (req, res) => {
    service.loginUser(req.body.email, req.body.password).then((user) => {
        console.log(user);
        res.json(user);
    }).catch((_err) => res.status(500).send('Error on login in user'));
});
router.get('/', (_req, res) => {
    service.getSecureEntries().then((allUsers) => res.json(allUsers)).catch((_err) => res.status(400).send('Error fetching users'));
});
router.post('/', (req, res) => {
    const user = req.body;
    service.addUser(user).then((result) => {
        res.json(result);
    }).catch((_err) => { res.send('Error with user!'); });
});
router.get('/:id', (req, res) => {
    service.findUserById(+req.params.id).then((foundUser) => {
        if (foundUser != null)
            res.send(foundUser);
        else
            res.status(404).send('User Not Found!');
    }).catch((_err) => res.status(400).send('Error on Server'));
});
exports.default = router;
//# sourceMappingURL=user.js.map