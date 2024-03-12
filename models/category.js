import { DataTypes } from "sequelize";
import sequelize from '../database/connection.js';
import Product from './product.js';

const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryDescription: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'There is no description for this category yet.'
    }
})

Category.belongsToMany(Product, { through: 'product_category' });

export default Category;