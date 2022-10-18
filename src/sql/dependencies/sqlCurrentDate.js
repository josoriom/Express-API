const sqlCurrentDate = function (options = {}) {
  const date = new Date();
  return date.toLocaleString('en-US');
};

module.exports = { sqlCurrentDate };
