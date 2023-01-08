const MYSQL_DATABASE_CONFIGURATION = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password", // use your password here for the MySQL
};

const MONGODB_DATABASE_CONFIGURATION = {
  URI: 'mongodb://localhost:27017/test' // use your MongoDB URI here
}

module.exports = { MYSQL_DATABASE_CONFIGURATION, MONGODB_DATABASE_CONFIGURATION };
