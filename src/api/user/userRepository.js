
module.exports = class UserRepository {
  constructor() {
  }

  findById(userId) {
    return `select * from portal_users where lower(user_b) = lower('${userId}')`
  }

  addUser() {
    return `insert into portal_users(USER_B, FULLNAME, EMAIL, SALT, PASSWORDHASH ) VALUES (:USER_B, :FULLNAME, :EMAIL, :SALT, :PASSWORDHASH )`
  }

};
