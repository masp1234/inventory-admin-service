import express from 'express';
import connection from './database/connection.js'
import Product from './models/product.js'

const app = express();

app.get("/test", async (req, res) => {
    console.log(Product);
    Product.create({ id: 1 })
    res.send({ message: 'test' })
})

const PORT = 8080;

app.listen(PORT, () => console.log('Server is listening on port', PORT));