import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import categories from './data/categories.json';
import products from './data/products.json';
import { Product } from 'product';

const app: Application = express();
const port = process.env.PORT || 8000;
const productsRouter = express.Router();
const categoriesRouter = express.Router();

app.use(cors())
app.use('/products', productsRouter)
app.use('/categories',categoriesRouter)

productsRouter.get('/', (req:Request,res:Response) => {
    res.send(products)
});

productsRouter.get('/:id?', (req:Request,res:Response) => {
    const {id} = req.params;
    res.send(products.find((p: Product) => p.id === parseInt(id)))
});

productsRouter.get('/cat/:id?', (req:Request,res:Response) => {
    const {id} = req.params;
    res.send(products.filter((p: Product) => p.category_id === parseInt(id)))
});

categoriesRouter.get('/', (req:Request,res:Response) => {
    
    
    res.send(categories)
});

categoriesRouter.get('/:id?', (req:Request,res:Response) => {
    const {id} = req.params
    res.send(categories.find((c: { id: number; }) => c.id === parseInt(id)))
})

categoriesRouter.get('/name/:name?', (req:Request,res:Response) => {
    const {name} = req.params;
    console.log(req.params);
    console.log("name: ",name);
    
    res.send(categories.find((c: { category_name: string; }) => c.category_name === name.toUpperCase()))
})


app.listen(port, () => {
    console.log(`Server ready on port ${port}.`)
});