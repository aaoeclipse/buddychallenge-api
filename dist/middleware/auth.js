"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (_req, _res, next) => {
    console.log('authorizing user!');
    next();
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map