const express = require("express");
const router = express.Router();
const mySqlConnection = require("../connection/mysql-connection");
const mongoDbConnection = require("../connection/mongodb-connection");
const {
  DUMMY_DATA_PRODUCT,
  DUMMY_DATA_CUSTOMER,
  DUMMY_DATA_USER,
  DUMMY_DATA_INVOICE,
  DUMMY_DATA_ACTIVITY,
  DUMMY_DATA_REMINDER,
} = require("../data/dummy-data");
const API_ENDPOINTS = require("../settings/api-endpoints");
const DATABASE_QUERIES = require("../settings/settings");

/**
 * API Endpoint for authenticating a user
 * @param {userName, userPassword}
 */

router.post(API_ENDPOINTS.AUTHENTICATE, (req, res) => {
  const { userName, userPassword } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.AUTHENTICATE,
        [userName, userPassword],
        (err, results) => {
          if (!err) {
            results.length === 0 ? res.send(401): res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for inserting product data
 * @param {productName, productPrice, productQuantity}
 */

router.post(API_ENDPOINTS.PRODUCT, (req, res) => {
  const { productName, productPrice, productQuantity } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_PRODUCT,
        [productName, productPrice, productQuantity],
        (err, results) => {
          if (!err) {
            res.sendStatus(201);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for searching the product
 * @param {searchId}
 */

router.get(API_ENDPOINTS.PRODUCT, (req, res) => {
  const searchId = req.query.searchId;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.SEARCH_PRODUCT,
        [searchId],
        (err, results) => {
          if (!err) {
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for getting the list of products
 * @param {}
 */

router.get(API_ENDPOINTS.PRODUCTS, (req, res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(DATABASE_QUERIES.GET_PRODUCTS, (err, results) => {
        if (!err) {
          res.send(results);
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for adding a new user
 * @param {userName, userPassword, userRole}
 */

router.post(API_ENDPOINTS.USER, (req, res) => {
  const { userName, userPassword, userRole } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_USER,
        [userName, userPassword, userRole],
        (err, results) => {
          if (!err) {
            res.sendStatus(201);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for searching a user
 * @param {searchId}
 */

router.get(API_ENDPOINTS.USER, (req, res) => {
  const searchId = req.query.searchId;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.SEARCH_USER,
        [searchId],
        (err, results) => {
          if (!err) {
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for deleting a user
 * @param {deleteId}
 */

router.delete(API_ENDPOINTS.USER, (req, res) => {
  const deleteId = req.query.deleteId;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.DELETE_USER,
        [deleteId],
        (err, results) => {
          if (!err) {
            res.sendStatus(200);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for getting the list of users
 * @param {}
 */

router.get(API_ENDPOINTS.USERS, (req, res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(DATABASE_QUERIES.GET_USERS, (err, results) => {
        if (!err) {
          res.send(results);
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for adding a new customer
 * @param {customerName, customerPhone}
 */

router.post(API_ENDPOINTS.CUSTOMER, (req, res) => {
  const { customerName, customerPhone } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_CUSTOMER,
        [customerName, customerPhone],
        (err, results) => {
          if (!err) {
            res.sendStatus(201);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for updating a customer
 * @param {customerId, customerName, customerPhone}
 */

router.put(API_ENDPOINTS.CUSTOMER, (req, res) => {
  const { customerId, customerName, customerPhone } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.UPDATE_CUSTOMER,
        [customerName, customerPhone, customerId],
        (err, results) => {
          if (!err) {
            res.sendStatus(200);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for searching a customer
 * @param {searchId}
 */

router.get(API_ENDPOINTS.CUSTOMER, (req, res) => {
  const searchId = req.query.searchId;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.SEARCH_CUSTOMER,
        [searchId],
        (err, results) => {
          if (!err) {
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for getting the list of customers
 * @param {}
 */

router.get(API_ENDPOINTS.CUSTOMERS, (req, res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(DATABASE_QUERIES.GET_CUSTOMERS, (err, results) => {
        if (!err) {
          res.send(results);
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error(err);
    }
  });
});


/**
 * API Endpoint for adding a new invoice
 * @param {invoiceCustomerId, invoiceUserId, invoiceProductId}
 */

router.post(API_ENDPOINTS.INVOICE, (req, res) => {
  const { invoiceCustomerId, invoiceUserId, invoiceProductId } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_INVOICE,
        [invoiceCustomerId, invoiceUserId, invoiceProductId],
        (err, results) => {
          if (!err) {
            res.sendStatus(201);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint to get list of invoices
 * @param {}
 */

router.get(API_ENDPOINTS.INVOICE, (req, res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(DATABASE_QUERIES.GET_INVOICE, (err, results) => {
        if (!err) {
          res.send(results);
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for creating a new activity
 * @param {activityTitle, activityDescription, activityCustomerId, activityUserId}
 */

router.post(API_ENDPOINTS.ACTIVITY, (req, res) => {
  const {
    activityTitle,
    activityDescription,
    activityCustomerId,
    activityUserId,
  } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_ACTIVITY,
        [
          activityTitle,
          activityDescription,
          activityCustomerId,
          activityUserId,
        ],
        (err, results) => {
          if (!err) {
            res.sendStatus(201);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for getting the list of activities
 * @param {}
 */

router.get(API_ENDPOINTS.ACTIVITY, (req, res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(DATABASE_QUERIES.GET_ACTIVITY, (err, results) => {
        if (!err) {
          res.send(results);
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for adding a new reminder
 * @param {reminderTitle, reminderDescription, reminderDate,reminderStatus,reminderUserId}
 */

router.post(API_ENDPOINTS.REMINDER, (req, res) => {
  const {
    reminderTitle,
    reminderDescription,
    reminderDate,
    reminderStatus,
    reminderUserId
  } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.ADD_REMINDER,
        [
          reminderTitle,
          reminderDescription,
          reminderDate,
          reminderStatus,
          reminderUserId
        ],
        (err, results) => {
          if (!err) {
            res.sendStatus(201);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for getting the reminders of a user
 * @param {searchId}
 */

router.get(API_ENDPOINTS.REMINDER, (req, res) => {
  const searchId = req.query.searchId;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.GET_REMINDER,
        [searchId],
        (err, results) => {
          if (!err) {
            res.send(results);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for updating the reminder
 * @param {reminderTitle, reminderDescription, reminderDate, reminderStatus, reminderId}
 */

router.put(API_ENDPOINTS.REMINDER, (req, res) => {
  const {
    reminderTitle, reminderDescription, reminderDate, reminderStatus, reminderId
  } = req.body;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.UPDATE_REMINDER,
        [reminderTitle, reminderDescription, reminderDate, reminderStatus, reminderId],
        (err, results) => {
          if (!err) {
            res.sendStatus(200);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for deleting a reminder
 * @param {deleteId}
 */

router.delete(API_ENDPOINTS.REMINDER, (req, res) => {
  const deleteId = req.query.deleteId;

  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(
        DATABASE_QUERIES.DELETE_REMINDER,
        [deleteId],
        (err, results) => {
          if (!err) {
            res.sendStatus(200);
          } else {
            throw new Error(err);
          }
        }
      );
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint to flush all the rows of the tables
 * @param {}
 */

router.get(API_ENDPOINTS.FLUSH, (req, res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query(DATABASE_QUERIES.FLUSH_DATA, (err, results) => {
        if (!err) {
          res.sendStatus(200);
        } else {
          throw new Error(err);
        }
      });
    } else {
      throw new Error(err);
    }
  });
});

/**
 * API Endpoint for inserting the dummy data in all the tables
 * @param {}
 */

router.post(API_ENDPOINTS.DUMMY, async (req, res) => {
  await insertCustomerData();
  await insertUserData();
  await insertProductData();
  await insertInvoiceData();
  await insertActivityData();
  await insertReminderData(res);
});

const insertCustomerData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_CUSTOMER.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_CUSTOMER,
          [
            DUMMY_DATA_CUSTOMER[i].CUSTOMER_NAME,
            DUMMY_DATA_CUSTOMER[i].CUSTOMER_PHONE_NO,
          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};

const insertUserData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_USER.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_USER,
          [
            DUMMY_DATA_USER[i].USER_NAME,
            DUMMY_DATA_USER[i].USER_PASSWORD,
            DUMMY_DATA_USER[i].USER_ROLE,
          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};

const insertProductData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_PRODUCT.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_PRODUCT,
          [
            DUMMY_DATA_PRODUCT[i].PRODUCT_NAME,
            DUMMY_DATA_PRODUCT[i].PRODUCT_PRICE,
            DUMMY_DATA_PRODUCT[i].PRODUCT_QUANTITY,
          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};

const insertInvoiceData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_INVOICE.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_INVOICE,
          [
            DUMMY_DATA_INVOICE[i].INVOICE_CUSTOMER_ID,
            DUMMY_DATA_INVOICE[i].INVOICE_USER_ID,
            DUMMY_DATA_INVOICE[i].INVOICE_PRODUCT_ID,
          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};

const insertActivityData = async () => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_ACTIVITY.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_ACTIVITY,
          [
            DUMMY_DATA_ACTIVITY[i].ACTIVITY_TITLE,
            DUMMY_DATA_ACTIVITY[i].ACTIVITY_DESCRIPTION,
            DUMMY_DATA_ACTIVITY[i].ACTIVITY_CUSTOMER_ID,
            DUMMY_DATA_ACTIVITY[i].ACTIVITY_USER_ID,
          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    } else {
      throw new Error(err);
    }
  });
};

const insertReminderData = async (res) => {
  mySqlConnection.connect((err) => {
    if (!err) {
      for (let i = 0; i < DUMMY_DATA_REMINDER.length; i++) {
        mySqlConnection.query(
          DATABASE_QUERIES.ADD_REMINDER,
          [
            DUMMY_DATA_REMINDER[i].REMINDER_TITLE,
            DUMMY_DATA_REMINDER[i].REMINDER_DESCRIPTION,
            DUMMY_DATA_REMINDER[i].REMINDER_DATE,
            DUMMY_DATA_REMINDER[i].REMINDER_STATUS,
            DUMMY_DATA_REMINDER[i].REMINDER_USER_ID,
          ],
          (err, results) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
      res.sendStatus(200);
    } else {
      throw new Error(err);
    }
  });
};

/**
 * API Endpoint for migrating data to mongodb
 * @param {}
 */

router.get(API_ENDPOINTS.MIGRATE, (req, res) => {
  let tables = [];
  mySqlConnection.connect((err) => {
    if (!err) {
      mySqlConnection.query("SHOW TABLES IN CRM", (error, results, fields) => {
        if (error) throw error;

        results.forEach((row) => {
          tables.push(Object.values(row)[0]);
        });

        tables.forEach((table) => {
          mySqlConnection.query(
            `SELECT * FROM CRM.${table}`,
            (error, results, fields) => {
              if (error) throw error;

              mongoDbConnection.connect((err, client) => {
                if (err) throw err;

                const db = mongoDbConnection.db("test");
                db.collection(table).insertMany(results, (error, res) => {
                  console.log(results);
                  console.log(`Data Migrated`, res);
                  mongoDbConnection.close();
                });
              });
              console.log(results);
            }
          );
        });
      });
    } else {
      throw new Error(err);
    }
  });
  res.sendStatus(200);
});

module.exports = router;
