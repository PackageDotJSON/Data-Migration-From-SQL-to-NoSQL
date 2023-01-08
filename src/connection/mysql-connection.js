// import the client library
const mysql = require("mysql2");
const {
  MYSQL_DATABASE_CONFIGURATION,
} = require("../configuration/configuration");
const DATABASE_MESSAGES = require("../settings/messages");
const DATABASE_QUERIES = require("../settings/settings");

// create the connection to database
const connection = mysql.createConnection({
  host: MYSQL_DATABASE_CONFIGURATION.HOST,
  user: MYSQL_DATABASE_CONFIGURATION.USER,
  password: MYSQL_DATABASE_CONFIGURATION.PASSWORD,
  multipleStatements: true,
});

/**
 * Create a database schema for MySQL
 */
connection.connect((err) => {
  if (!err) {
    connection.query(DATABASE_QUERIES.CREATE_DATABASE_CRM, (err, results) => {
      if (!err) {
        console.log(DATABASE_MESSAGES.DATABASE_CREATION_MESSAGE);
      } else {
        throw new Error(err);
      }
    });
  } else {
    throw new Error(err);
  }
});

/**
 * Create tables for the MySQL database
 * Create USER table
 */
connection.connect((err) => {
  if (!err) {
    connection.query(DATABASE_QUERIES.CREATE_TABLE_USER, (err, results) => {
      if (!err) {
        console.log(DATABASE_MESSAGES.USER_TABLE_CREATION_MESSAGE);
      } else {
        throw new Error(err);
      }
    });
  } else {
    throw new Error(err);
  }
});

/**
 * Create tables for the MySQL database
 * Create PRODUCT table
 */
connection.connect((err) => {
  if (!err) {
    connection.query(DATABASE_QUERIES.CREATE_TABLE_PRODUCT, (err, results) => {
      if (!err) {
        console.log(DATABASE_MESSAGES.PRODUCT_TABLE_CREATION_MESSAGE);
      } else {
        throw new Error(err);
      }
    });
  } else {
    throw new Error(err);
  }
});

/**
 * Create tables for the MySQL database
 * Create CUSTOMER table
 */
connection.connect((err) => {
  if (!err) {
    connection.query(DATABASE_QUERIES.CREATE_TABLE_CUSTOMER, (err, results) => {
      if (!err) {
        console.log(DATABASE_MESSAGES.CUSTOMER_TABLE_CREATION_MESSAGE);
      } else {
        throw new Error(err);
      }
    });
  } else {
    throw new Error(err);
  }
});

/**
 * Create tables for the MySQL database
 * Create INVOICE table
 */
connection.connect((err) => {
  if (!err) {
    connection.query(DATABASE_QUERIES.CREATE_TABLE_INVOICE, (err, results) => {
      if (!err) {
        console.log(DATABASE_MESSAGES.INVOICE_TABLE_CREATION_MESSAGE);
      } else {
        throw new Error(err);
      }
    });
  } else {
    throw new Error(err);
  }
});

/**
 * Create tables for the MySQL database
 * Create ACTIVITY table
 */
connection.connect((err) => {
  if (!err) {
    connection.query(DATABASE_QUERIES.CREATE_TABLE_ACTIVITY, (err, results) => {
      if (!err) {
        console.log(DATABASE_MESSAGES.ACTIVITY_TABLE_CREATION_MESSAGE);
      } else {
        throw new Error(err);
      }
    });
  } else {
    throw new Error(err);
  }
});

/**
 * Create tables for the MySQL database
 * Create REMINDER table
 */
connection.connect((err) => {
  if (!err) {
    connection.query(DATABASE_QUERIES.CREATE_TABLE_REMINDER, (err, results) => {
      if (!err) {
        console.log(DATABASE_MESSAGES.REMINDER_TABLE_CREATION_MESSAGE);
      } else {
        throw new Error(err);
      }
    });
  } else {
    throw new Error(err);
  }
});

module.exports = connection;
