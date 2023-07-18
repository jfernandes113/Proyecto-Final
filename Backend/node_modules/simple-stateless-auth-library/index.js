const { hash, cookie, jwt, time } = require("./utils");

const DEFAULT_EXP_TIME = 300000
const DEFAULT_TYPE = 'ms'

const serialize = (
  res,
  payload,
  expOptions = { value: DEFAULT_EXP_TIME, type: DEFAULT_TYPE }
) => {
  const token = jwt.sign(payload);
  cookie.create(res, token, time.parseExpTime(expOptions));
};

const deserialize = (req) => {
  const { access_token } = req?.cookies || {};
  const payload = jwt.verify(access_token);
  if (!payload) return false;
  return payload;
};

module.exports = {
  hash,
  cookie,
  jwt,
  time,
  serialize,
  deserialize,
};
