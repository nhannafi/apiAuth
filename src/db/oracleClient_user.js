/* eslint-disable object-shorthand */
const oracledb = require('oracledb');
const config = require('config');
const logger = require('../utils/logger');


const { user, password, connectString } = config.get('dbOracle');

// Note: connections should always be released when not needed
function doRelease(connection) {
  connection.close(
    (err) => {
      if (err) {
        logger.error(`Error occurred while closing Oracle client: ${err.message}`);
      }
    },
  );
}

oracledb.autoCommit = true;
module.exports = function getOracleClient(query, values) {
  return new Promise(((resolve, reject) => {
    oracledb.getConnection(
      {
        user: user,
        password: password,
        connectString: connectString,
      },
      (err, connection) => {
        if (err) {
          logger.error(err.message);
          return;
        }
        logger.info('Connection with Oracle Db has been established successful!');
        connection.execute(
          query,
          values,
          {outFormat: oracledb.OBJECT},
          // eslint-disable-next-line no-shadow
          (err, result) => {
            if (err) {
              reject(err.message);
              logger.error(err.message);
              doRelease(connection);
              return;
            }
            // logger.info(result.metaData);
            resolve(result.rows[0]);
            doRelease(connection);
          },
        );
      },
    );
  }));
};
