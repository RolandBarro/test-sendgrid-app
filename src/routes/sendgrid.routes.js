const router = require('express').Router();

const { SendGrid } = require('../controllers');

router.post('/send-test', (req, res) => {
  const { query, body } = req;
  
  const sendGrid = new SendGrid({ query, body }, { res });

  sendGrid.sendMessage();
});

module.exports = router;