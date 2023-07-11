//Check if these adapts to your projects
const errors = require('../misc/errors');

module.exports = (...fields) => (req, res, next) => {
  for (let field of fields) {
    if (!req.body[field]) return next(errors[400]);
  }

  const { password } = req.body;

  if (password && password.length < 4) return next(errors['pass_length']);

  next();
};
