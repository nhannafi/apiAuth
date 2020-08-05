

const oracleClient = require('../../db/oracleClient');

const VersionRepository = require('./VersionRepository');

module.exports = class VersionsService {
  constructor() {
    this.versionRepository = new VersionRepository();
  }

  getVersions() {
    return oracleClient(this.versionRepository.getAllVersionsQuery(), []);
  }

  addVersion(version) {
    return oracleClient(this.versionRepository.addOneVersion(), version);
  }
};
