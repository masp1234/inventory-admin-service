import { DataTypes } from "sequelize";
import sequelize from '../database/connection.js';

const Product = sequelize.define('products', {
   id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'There is no description for this product yet.'
   },
   quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
   }

})

Product.sync();

export default Product;

