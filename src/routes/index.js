const router = require('express').Router();

const defaultRoute = require('./default.routes');
const sendgrid = require('./sendgrid.routes');

router.use('/', defaultRoute);
router.use('/sendgrid', sendgrid);

module.exports = router;