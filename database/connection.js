import { Sequelize } from 'sequelize';

const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123123',
    database: 'inventory_admin'
})

async function testConnection() {
    try {
      await connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

await testConnection();

export default connection;

