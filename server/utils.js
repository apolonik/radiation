const generateExpression = (cols, type, extraCondition = '') => {
  return `SELECT ${cols} FROM radiation_db.${type} ${extraCondition}`;
};

const parseDescription = (data) => {
  if (data.description) {
    data.description = JSON.parse(data.description);
  }
  return data;
};

exports.parseDescription = parseDescription;
exports.generateExpression = generateExpression;