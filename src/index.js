const express = require('express');
const mySqlConnection = require('./connection/mysql-connection');
const mongoDbConnection = require('./connection/mongodb-connection');
const cors = require('cors');
const http = require('http');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


const address = '0.0.0.0';
const port = 3000;
const server = http.createServer(app);
server.listen(port, address, () => {
    console.log(`Server is listening on ${port}`);
})