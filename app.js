import express from 'express';
import Product from './models/product.js'
import Category from './models/category.js';
import sequelize from './database/connection.js';

await sequelize.sync({ force: true });

const app = express();

app.get("/test", async (req, res) => {
    const createdProduct = await Product.create({ name: 'test product' });
    console.log(createdProduct.dataValues);

    res.send({ data: createdProduct.dataValues })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server is listening on port', PORT));