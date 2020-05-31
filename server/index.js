const {app} = require('./server');
const {promisifyQuery, generateExpression} = require('./pool');
const {DB_TABLES, REQ_TYPES} = require('./constants');

app.post('/api/query', async (req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  }
  try {
    let expression;
    switch (req.body.type) {
      case (REQ_TYPES.NPP):
        expression = generateExpression('*', DB_TABLES.NPP);
        break;
      case (REQ_TYPES.REACTORS):
        expression = generateExpression('*', DB_TABLES.REACTORS, `where title="${req.body.title}"`);
        break;
      case (REQ_TYPES.LINK):
        expression = generateExpression('link', DB_TABLES.NPP, `where title="${req.body.title}"`);
        break;
      case (REQ_TYPES.NUCLEAR_FUEL):
        expression = generateExpression('*', DB_TABLES.NF);
        break;
      case (REQ_TYPES.NUCLEAR_FUEL_AREA):
        expression = generateExpression('*', DB_TABLES.NFA, `where country="${req.body.country}"`);
        break;
      case (REQ_TYPES.CC):
        expression = generateExpression('*', DB_TABLES.CC, `where country="${req.body.country}"`);
        break;
      default:
        return res.sendStatus(404);
    }

    const result = await promisifyQuery(expression);

    switch (req.body.type) {
      case (REQ_TYPES.NPP):
        res.send(result.filter(item => item.lat));
        break;
      case (REQ_TYPES.NUCLEAR_FUEL):
        const coords = await promisifyQuery(generateExpression('*', DB_TABLES.CC));
        for (const obj of coords) {
          obj.data = result.filter((item) => item.country === obj.country);
        };
        res.send(coords);
        break;
      default:
        return res.send(result);
    }
  } catch (error) {
    res.send(error);
  }
});