"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user/user"));
const setRoutes_1 = __importDefault(require("./routes/set/setRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/user', user_1.default);
app.use('/api/set', setRoutes_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
//# sourceMappingURL=app.js.map