const Chat = require('./chat');
const chat = new Chat();

test('Example test case', () => {
  expect(chat.logMessage('test')).toBe('Chat log: test');
})
