const express = require('express');
const logger = require('../../../utils/logger');

const router = express.Router();
const ConsignService = require('./ConsignService');

const consignService = new ConsignService();

router.get('/', (req, res) => {
  consignService.getConsigns()
    .then((resultQuery) => {
      res.send(resultQuery.rows);
      logger.info('Select query has been successfully responded by Oracle Server');
    })
    .catch(err => {
      logger.error(err);
      res.send(err);
    });
});

router.get('/getByProject', (req, res) => {
  consignService.getConsignById(req.query.refproject)
    .then((resultQuery) => {
      res.send(resultQuery.rows);
      logger.info('Select Query By RefProjet has been successfully responded by Oracle Server');
    })
    .catch(err => {
      logger.error(err);
      res.send(err);
    });
});

module.exports = router;
