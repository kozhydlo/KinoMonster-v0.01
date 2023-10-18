// Підключення до сервера
const socket = new WebSocket("ws://localhost:3000");

// Обробка повідомлень
socket.onmessage = function (event) {
  const message = event.data;
  const messagesContainer = document.getElementById("chat-messages");
  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  messagesContainer.appendChild(newMessage);
};

// Відправлення повідомлень
const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
sendButton.addEventListener("click", function () {
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = "";
});
