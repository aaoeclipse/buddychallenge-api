"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.use(auth_1.auth);
// ALL GETS ARE PROTECTED
router.get('/', (_req, res) => {
    res.status(200).send('Here goes all the sets of the current user');
});
router.post('/new', (_req, res) => {
    res.status(200).send('create new post from user');
});
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Update id ${id}`);
});
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Delete id ${id}`);
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Get set by the id ${id}`);
});
exports.default = router;
//# sourceMappingURL=SetRoutes.js.map