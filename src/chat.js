const isEqual = require("lodash.isequal");

class Chat {
  constructor(users = [], admin = null) {
    this.users = users;
    this.admin = admin;
  }

  logMessage(message) {
    const log = `Chat log: ${message}`;
    console.log(log);
    return log;
  }

  addNewUser(user) {
    if (!user.isBanned) {
      this.users.push(user);
      this.logMessage(`User ${user.getUserFullName()} joined the chat`);
    } else {
      this.logMessage(
        `User ${user.name} is banned and can't be added to the chat`
      );
    }
  }

  removeUser(user) {
    this.users.filter(inChatUser => {
      if (isEqual(inChatUser, user)) {
        return false;
      }
      return true;
    });
    this.logMessage(`User ${user.getUserFullName()} left the chat`);
  }

  displayUserMessage(user, message) {
    console.log(`${user.getUserFullName()} says: ${message}`);
  }
}

module.exports = Chat;
