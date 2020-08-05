/* eslint-disable class-methods-use-this */

module.exports = class ConsignRepository {
  getAllConsignsQuery() {
    return `SELECT *
    FROM suivi_projet`;
  }

  getConsignsByIdQuery(refProject) {
    return `SELECT USER_VTOM, REFPROJET, OBJDATE, OBJACTION, ENVNAME, APPNAME, JOBNAME
    FROM suivi_projet
    Where refprojet = '${refProject}'`;
  }
};
