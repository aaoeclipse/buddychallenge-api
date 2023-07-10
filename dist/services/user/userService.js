"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getSecureEntries = exports.findUserById = exports.getEntries = void 0;
const user_json_1 = __importDefault(require("../../data/user/user.json"));
const db_1 = require("../../db/db");
const users = user_json_1.default;
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
            active: true
        }
    });
    return user;
};
exports.addUser = addUser;
//# sourceMappingURL=userService.js.map