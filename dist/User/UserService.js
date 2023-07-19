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
exports.loginUser = exports.addUser = exports.getSecureEntries = exports.findUserById = exports.getEntries = void 0;
const user_json_1 = __importDefault(require("../data/user/user.json"));
const db_1 = require("../db/db");
const bcrypt = __importStar(require("bcrypt"));
const users = user_json_1.default;
const saltRounds = 8;
const getEntries = () => users;
exports.getEntries = getEntries;
const findUserById = async (id) => {
    const user = await db_1.prisma.user.findFirst({
        where: {
            id
        }
    });
    if (user != null) {
        const { active, ...secureUser } = user;
        return secureUser;
    }
    else
        return user;
};
exports.findUserById = findUserById;
const getSecureEntries = async () => {
    const usersdb = await db_1.prisma.user.findMany();
    return usersdb.map(({ id, name, email }) => {
        return {
            id,
            name,
            email
        };
    });
};
exports.getSecureEntries = getSecureEntries;
const addUser = async (newUser) => {
    newUser.id = 0;
    newUser.active = true;
    const user = await db_1.prisma.user.create({
        data: {
            name: newUser.name,
            email: newUser.email,
            password: await bcrypt.hash(newUser.password, saltRounds),
            active: true
        }
    });
    return user;
};
exports.addUser = addUser;
const loginUser = async (email, pass) => {
    try {
        const user = await findUserByEmail(email);
        if (user !== null) {
            const { password, active, ...userSafe } = user;
            const matching = bcrypt.compareSync(pass, user.password);
            if (matching)
                return userSafe;
            else
                throw new Error('Email or password is not correct');
        }
        else {
            throw new Error('Email or password is not correct');
        }
    }
    catch (error) {
        console.log('[-] Error on hashpass');
        throw new Error('Email or password is not correct');
    }
};
exports.loginUser = loginUser;
const findUserByEmail = async (email) => {
    const user = await db_1.prisma.user.findFirst({
        where: {
            email
        }
    });
    return user;
};
//# sourceMappingURL=UserService.js.map