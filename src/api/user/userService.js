const UserRepository = require('./userRepository');
const OracleDBClientget = require('../../db/oracleClient_user')
const OracleDBClientinsert = require('../../db/oracleClient_userAdd')

module.exports = class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  findById(userId) {
    return OracleDBClientget(this.userRepository.findById(userId), [])
  }

  findByEmail(email) {
    return OracleDBClientget(this.userRepository.findByEmail(email), [])
  }

  addUser(user) {
    return OracleDBClientinsert(this.userRepository.addUser(), user)
  }


  // findById(id) {
  //   return this.userRepository.findById(id)
  //     .then(user => UserService.mapUserToDto(user));
  // }

  // addUser(user) {
  //   return this.userRepository.addUser(user);
  // }

  // editUser(dto) {
  //   const user = UserService.mapDtoToUser(dto);
  //   return this.userRepository.editUser(dto.id, user);
  // }

  // deleteUser(id) {
  //   return this.userRepository.deleteUser(id);
  // }

  // changePassword(id, salt, passwordHash) {
  //   return this.userRepository.changePassword(id, salt, passwordHash);
  // }

  static mapUserToDto(user) {
    return user ? {
      id: user._id,
      email: user.email,
      age: user.age,
      login: user.fullName,
      firstName: user.firstName,
      lastName: user.lastName
    } : {};
  }

  // static mapDtoToUser(dto) {
  //   return dto ? {
  //     email: dto.email,
  //     age: dto.age,
  //     login: dto.fullName,
  //     firstName: dto.firstName,
  //     lastName: dto.lastName,
  //   } : {};
  // }
};
