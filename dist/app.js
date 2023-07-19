"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoute_1 = __importDefault(require("./User/UserRoute"));
const SetRoutes_1 = __importDefault(require("./Set/SetRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/user', UserRoute_1.default);
app.use('/api/set', SetRoutes_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
//# sourceMappingURL=app.js.map