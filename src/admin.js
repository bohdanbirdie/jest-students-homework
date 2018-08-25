const User = require("./user");

class Admin extends User {
  constructor(name = "", surname = "", id = "") {
    super(name, surname, id);
  }

  removeUserFromChat(user, chat) {
    chat.removeUser(user);
  }

  banUser(user) {
    user.isBanned = true;
    this.chat.removeUser(user);
  }

  unbanUser(user) {
    user.isBanned = false;
  }
}

module.exports = Admin;
