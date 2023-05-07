const buttonHandlers = require("../handlers/buttons");
const {firstMessage} = require("../handlers");
// const { humanMessage } = require("./functions");

const intervalo = 1000 * 60 * 10;
const lastMessages = {};

async function start(client) {
    client.onMessage(async (message) => {
      if (
          message.fromMe ||
          message.isGroupMsg ||
          message.from !== "556892253537@c.us"
        ) {
          return;
        }

      console.log(message);
  
      if (message.type === "buttons_response") {
        const handler = buttonHandlers[message.selectedButtonId];
        if (handler) {
          //await humanMessage(client, message);
          await handler(client, message);
        }
      } else {
        const now = Date.now();
        const lastMessage = lastMessages[message.from] || 0;
        const elapsed = now - lastMessage;
        if (elapsed >= intervalo) {
          //await humanMessage(client, message);
          await firstMessage(client, message);
          lastMessages[message.from] = now;
        }
      }
    });
  }

  module.exports = start;