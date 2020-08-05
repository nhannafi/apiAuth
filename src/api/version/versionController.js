const express = require('express');

const router = express.Router();

const VersionService = require('./VersionService');
const logger = require('../../utils/logger');

const versionService = new VersionService();

router.get('/', (req, res) => {
  versionService
    .getVersions()
    .then((resultQuery) => {
      res.send(resultQuery.rows);
      logger.info('Select query for versions has been successfully responded by Oracle Server');
    })
    .catch(err => {
      res.send(err);
    });
});

router.post('/', (req, res) => {
  versionService
    .addVersion(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.put('/', (req, res) => {
  versionService
    .editData(req.body)
    .then(data => res.send(data));
});

router.delete('/', (req, res) => {
  versionService
    .deleteData(req.body)
    .then(() => res.send({ id: req.query.id }));
});

module.exports = router;
