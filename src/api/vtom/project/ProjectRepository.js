/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */

module.exports = class ProjectRepository {
  getAllProjectsQuery() {
    return `SELECT *
    FROM VTOM_PROJET`;
  }

  addProjectQuery() {
    return `INSERT INTO VTOM_PROJET VALUES (:CODE_PROJET_ITCE, :CODE_CLARITY, :LIBELLE, :DEM_FONCT, :CODE_GECOCH, :CODE_SNOW, :VERSION_MYSYS, :DATE_RECEPTION, :STATUS)`;
  }

  updateProjectQuery(refproject) {
    return `UPDATE VTOM_PROJET SET STATUS = :1 WHERE CODE_PROJET_ITCE = '${refproject}' `;
  }
};
