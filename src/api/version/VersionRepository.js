
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */

module.exports = class VersionsRepository {
  getAllVersionsQuery() {
    // eslint-disable-next-line quotes
    return `SELECT * FROM VERSION_MYSYS ORDER BY CD_RELEASE DESC`;
  }

  addOneVersion() {
    // eslint-disable-next-line quotes
    return `INSERT INTO VERSION_MYSYS VALUES (:CD_RELEASE, :DT_1_INS_UTI, :DT_1_INS_QPA, :DT_BASC_PROD, :CD_CM_SYNERGIE)`;
  }
};
