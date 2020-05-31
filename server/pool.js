const mysql = require('mysql');

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

const promisifyQuery = (expression) => {
  return new Promise((resolve, reject) => {
    pool.query(expression, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

const generateExpression = (cols, type, extraCondition = '') => {
  return `SELECT ${cols} from ${process.env.database}.${type} ${extraCondition}`;
};

module.exports.promisifyQuery = promisifyQuery;
module.exports.generateExpression = generateExpression;