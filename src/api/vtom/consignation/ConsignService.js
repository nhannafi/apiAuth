const oracleClient = require('../../../db/oracleClient');

const ConsignRepository = require('./ConsignRepository');

module.exports = class ConsignService {
  constructor() {
    this.consignRepository = new ConsignRepository();
  }

  getConsigns() {
    return oracleClient(this.consignRepository.getAllConsignsQuery(), []);
  }

  getConsignById(refProject) {
    return oracleClient(this.consignRepository.getConsignsByIdQuery(refProject), []);
  }
};
