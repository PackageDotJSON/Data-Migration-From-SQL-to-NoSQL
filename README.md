# SQL to NoSQL Data Migration

This codebase contains scripts for migrating data from an SQL database to a NoSQL database.

## Prerequisites

- Node.js 16.17.0 or higher
- npm 6.14.8 or higher
- Access to an SQL database (MySQL)
- Access to a NoSQL database (MongoDB)

## Installation

1. Clone this repository.
2. Navigate to the root directory of the repository.
3. Run `npm install` to install the required dependencies.

## Usage

1. Navigate to the configuration directory in the src and modify the `configuration.js` file to include the connection details for your SQL and NoSQL databases.
2. Run the `index.js` script to begin the data migration process.

## Tips

- You may need to hit the APIs in the `index.js` script to add a dummy data and then migrate the data to NoSQL. It would be better if you modify the code as per your needs.
- It is recommended to test the migration on a small subset of data before running it on the entire dataset.
