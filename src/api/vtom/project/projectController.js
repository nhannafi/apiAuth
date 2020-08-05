const express = require('express');
const logger = require('../../../utils/logger');

const router = express.Router();
const ProjectService = require('./ProjectService');

const projectService = new ProjectService();

router.get('/', (req, res) => {
  projectService.getProjects()
    .then((resultQuery) => {
      res.send(resultQuery.rows);
      logger.info('Select query has been successfully responded by Oracle Server');
    })
    .catch(err => {
      logger.error(err);
      res.send(err);
    });
});

router.post('/', (req, res) => {
  projectService.addProject(req.body)
    .then((resultQuery) => {
      res.send(resultQuery);
      logger.info('Insert query has been successfully responded by Oracle Server');
    })
    .catch(err => {
      res.send(err);
    });
});

router.put('/', (req, res) => {
  if (!req.query.refproject || !req.query.newStatus) res.send('There is a problem with your query');
  projectService.updateProject(req.query.refproject, req.query.newStatus)
    .then((resultQuery) => {
      res.send(resultQuery);
      logger.info('Update query has been successfully responded by Oracle Server');
    })
    .catch(err => {
      res.send(err);
    });
});
module.exports = router;
