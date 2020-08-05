const mongoClient = require('mongodb').MongoClient;
const config = require('config');
const logger = require('../utils/logger');

let dbClient = null;

module.exports = function getMongoDBClient() {
  if (dbClient) {
    return dbClient;
  }
  logger.info('Connecting to MongoDB client...');

  const { url, name } = config.get('dbMongo');
  dbClient = mongoClient.connect(url, { useNewUrlParser: true })
    .then(client => {
      logger.info('MongoDB client has been successfully created');
      return client.db(name);
    })
    .catch(err => {
      logger.error(`Error occurred while connecting to mongodb: ${err}`);
    });

  return dbClient;
};
