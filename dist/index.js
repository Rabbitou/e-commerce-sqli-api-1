"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const categories_json_1 = __importDefault(require("./data/categories.json"));
const products_json_1 = __importDefault(require("./data/products.json"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
const productsRouter = express_1.default.Router();
const categoriesRouter = express_1.default.Router();
app.use((0, cors_1.default)());
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
productsRouter.get('/', (req, res) => {
    res.send(products_json_1.default);
});
productsRouter.get('/:id?', (req, res) => {
    const { id } = req.params;
    res.send(products_json_1.default.find((p) => p.id === parseInt(id)));
});
productsRouter.get('/cat/:id?', (req, res) => {
    const { id } = req.params;
    res.send(products_json_1.default.filter((p) => p.category_id === parseInt(id)));
});
categoriesRouter.get('/', (req, res) => {
    res.send(categories_json_1.default);
});
categoriesRouter.get('/:id?', (req, res) => {
    const { id } = req.params;
    res.send(categories_json_1.default.find((c) => c.id === parseInt(id)));
});
categoriesRouter.get('/name/:name?', (req, res) => {
    const { name } = req.params;
    console.log(req.params);
    console.log("name: ", name);
    res.send(categories_json_1.default.find((c) => c.category_name === name.toUpperCase()));
});
app.listen(port, () => {
    console.log(`Server ready on port ${port}.`);
});
//# sourceMappingURL=index.js.map