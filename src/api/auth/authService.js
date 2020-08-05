const UserService = require('../user/userService');
const cipher = require('../auth/cipherHelper');
const emailService = require('../../utils/emailService');

module.exports = class AuthService {
  constructor() {
    this.userService = new UserService();
  }

  register(user) {
    return this.userService.findById(user.user_B)
      .then(u => {
        if (u) {
          throw new Error(`L'utilisateur existe déjà`);
        }

        const { salt, passwordHash } = cipher.saltHashPassword(user.password);
        const newUser = {
          user_b: user.user_B,
          fullName: user.fullName,
          email: user.email,
          salt,
          passwordHash
        };
        let newUserArr = Object.values(newUser);
        return this.userService.addUser(newUserArr);
      });
  }

  resetPassword(password, confirmPassword, resetPasswordToken) {
    if (password.length < 6) {
      throw new Error('Le mot de passe doit être supérieure à 6 caractères');
    }

    if (password !== confirmPassword) {
      throw new Error('Veuillez saisir la confirmation de mot de passe de nouveau.');
    }

    const tokenContent = cipher.decipherResetPasswordToken(resetPasswordToken);
    if (new Date().getTime() > tokenContent.valid) {
      throw new Error('Token expiré.');
    }

    const { salt, passwordHash } = cipher.saltHashPassword(password);
    return this.userService.changePassword(tokenContent.userId, salt, passwordHash);
  }

  requestPassword(email) {
    return this.userService
      .findByEmail(email)
      .then(user => {
        if (user) {
          const token = cipher.generateResetPasswordToken(user._id);
          return emailService.sendResetPasswordEmail(email, user.fullName, token);
        }
        throw new Error('There is no defined email in the system.');
      });
  }
};
