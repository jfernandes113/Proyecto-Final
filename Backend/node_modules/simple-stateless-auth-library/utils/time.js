const TYPES = ["d", "h", "m", "s", "ms"];

const daysToMS = (value) => value * 24 * 60 * 60 * 1000;
const hoursToMS = (value) => value * 60 * 60 * 1000;
const minutesToMS = (value) => value * 60 * 1000;
const secondsToMS = (value) => value * 1000;
const msToMS = (value) => value;

const parseExpTime = ({ value, type }) => {
  if (!TYPES.includes(type)) {
    console.info("> error parsing expiration time in serialize fn");
    console.info(`> received ${type} but expected one of ${TYPES.toString()}`);
    return value;
  }

  const parser = {
    d: daysToMS,
    h: hoursToMS,
    m: minutesToMS,
    s: secondsToMS,
    ms: msToMS,
  };

  return parser[type](value);
};

module.exports = {
    parseExpTime,
}
