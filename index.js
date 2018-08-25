const Admin = require("./src/admin");
const User = require("./src/user");
const Chat = require("./src/chat");

const admin = new Admin("Alpha", "Omega", "0");
const goodJohn = new User("Good", "John", "1");
const badJohn = new User("Bad", "John", "2");
const chat = new Chat();

admin.joinChat(chat);
badJohn.joinChat(chat);
goodJohn.joinChat(chat);
goodJohn.speak("hello");
goodJohn.speak("How are you?");
badJohn.speak("#u$k @##");
admin.banUser(badJohn);

badJohn.joinChat(chat);

goodJohn.leaveChat();
admin.leaveChat();
