const {app} = require('./server');
const {promisifyQuery} = require('./pool');

const DB_TABLES = {
  POLYGONS: 'polygons',
  CATASTROPHES: 'catastrophes',
};

const generateExpression = (cols, type, extraCondition = '') => {
  return `SELECT ${cols} FROM radiation_db.${type} ${extraCondition}`;
};

app.get('/api/init', async (req, res) => {
  try {
    const cols = 'id, title, latitude, longitude, preview, date, type';

    let expression = generateExpression(cols, DB_TABLES.POLYGONS);
    const polygons = await promisifyQuery(expression);

    expression = generateExpression(cols, DB_TABLES.CATASTROPHES);
    const catastrophes = await promisifyQuery(expression);

    res.send([...catastrophes, ...polygons]);
  } catch (error) {
    res.send(error);
  }
});

app.post('/api/query', async (req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  }
  try {
    if (req.body.id) {
      const cols = 'description, title, preview';
      const expression = generateExpression(cols, `${req.body.type}s`, `where id=${req.body.id}`);
      const [data] = await promisifyQuery(expression);
      data.description = JSON.parse(data.description);
      res.send(data);
    } else {
      const cols = 'name, count';
      const expression = generateExpression(cols, req.body.type);
      const data = await promisifyQuery(expression);
      res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
});