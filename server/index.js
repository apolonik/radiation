const {app} = require('./server');
const {pool} = require('./pool');
const utils = require('./utils');

const DB_TABLES = {
  POLYGONS: 'polygons',
  CATASTROPHES: 'catastrophes',
};

app.get('/api/init', async (req, res) => {
  const cols = 'id, title, latitude, longitude, preview, date';
  const expression 
    = utils.generateExpression(cols, DB_TABLES.POLYGONS);

  pool.query(expression, (err, polygons) => {
    if (err) {
      return res.send(err);
    }

    const expression 
      = utils.generateExpression(cols, DB_TABLES.CATASTROPHES);

    return pool.query(expression, (err, catastrophes) => {
      if (err) {
        return res.send(err);
      }

      const results = [
        ...catastrophes.map(catastrophe => ({...catastrophe, type: 'catastrophe'})),
        ...polygons.map(polygon => ({...polygon, type: 'polygon'}))
      ];
      
      return res.send(results);
    });
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
      = utils.generateExpression(cols, `${req.body.type}s`, `where id=${req.body.id}`);
  } else {
    cols = 'name, count';
    expression 
      = utils.generateExpression(cols, req.body.type);
  }

  pool.query(expression, (err, results) => {
    if (err) {
      return res.send(err);
    }

    if (results[0].description) {
      results.map(item => utils.parseDescription(item));
    }

    return res.send(results);
  });
});