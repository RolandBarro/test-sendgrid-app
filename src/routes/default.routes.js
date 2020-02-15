const router = require('express').Router();

const { DefaultController } = require('../controllers');

router.get('/', (req, res) => {
    const { query } = req;
    
    const defaultCtrl = new DefaultController({}, { res });
    defaultCtrl.defaultEP();
  });

module.exports = router;