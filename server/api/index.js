const router = require('express').Router();

router.use('/users', require('./users.js'));

// User requests an API route that does not exist
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
