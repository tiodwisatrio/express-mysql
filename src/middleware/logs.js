const logRequest = (req, res, next) => {
  console.log(`Log request ke path : ${req.path}`);
  next();
};

const logResponse = (req, res, next) => {
    console.log(`Log response dari path : ${req.path}`);
    next()
};

module.exports = {
    logRequest,
    logResponse
};
