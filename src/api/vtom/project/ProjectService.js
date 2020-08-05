const oracleClient = require('../../../db/oracleClient');

const ProjectRepository = require('./ProjectRepository');

module.exports = class ProjectService {
  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  getProjects() {
    return oracleClient(this.projectRepository.getAllProjectsQuery(), []);
  }

  addProject(data) {
    return oracleClient(this.projectRepository.addProjectQuery(), data);
  }

  updateProject(refproject, newStatus) {
    return oracleClient(this.projectRepository.updateProjectQuery(refproject), [newStatus]);
  }
};
