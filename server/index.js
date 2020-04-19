const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const utils = require('./utils');

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

const app = express();

const DB_TABLES = {
  POLYGONS: 'polygons',
  CATASTROPHES: 'catastrophes',
};

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

app.get('/api/init', async (req, res) => {
  const cols = 'id, title, latitude, longitude, preview, date';
  const expression 
    = utils.generateExpression(cols, DB_TABLES.POLYGONS);

  pool.query(expression, (err, polygons) => {
    if (err) {
      return res.send(err);
    } else {
      const expression 
        = utils.generateExpression(cols, DB_TABLES.CATASTROPHES);
      return pool.query(expression, (err, catastrophes) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send({
            catastrophes,
            polygons,
          });
        }
      });
    }
  });
});

app.post('/api/query', (req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  }

  let cols, expression;
  if (req.body.id) {
    cols = 'description, title, preview';
    expression 
      = utils.generateExpression(cols, req.body.type, `where id=${req.body.id}`);
  } else {
    cols = 'name, count';
    expression 
      = utils.generateExpression(cols, req.body.type);
  }

  pool.query(expression, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      if (results[0].description) {
        results.map(item => utils.parseDescription(item));
      }
      return res.send(results);
    }
  });
});