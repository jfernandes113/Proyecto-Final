//Check if these adapts to your projects

const { deserialize } = require('simple-stateless-auth-library');
const errors = require('../misc/errors');

module.exports = (strict = true) => (req, res, next) => {
  const payload = deserialize(req);

  if (strict && !payload) return next(errors[401]);

  res.locals.user = payload || {};

  next();
};
