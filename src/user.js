class User {
  constructor(name = "", surname = "", id = "") {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.chat = null;
    this.isBanned = false;
  }

  isInChat() {
    return this.chat ? true : false;
  }

  getUserId() {
    return this.id;
  }

  getUserFullName() {
    return `${this.name} ${this.surname}`;
  }

  speak(message) {
    if (this.isInChat()) {
      this.chat.displayUserMessage(this, message);
    }
  }

  joinChat(chat) {
    chat.addNewUser(this);
    this.chat = chat;
  }

  leaveChat() {
    this.chat.removeUser(this);
    this.chat = null;
  }
}

module.exports = User;
