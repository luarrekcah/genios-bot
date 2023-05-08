const fs = require("fs");

const buttonHandlers = require("../handlers/buttons");
const { firstMessage } = require("../handlers");
// const { humanMessage } = require("./functions");

async function start(client) {
  client.onMessage(async (message) => {
    if (
      message.fromMe ||
      message.isGroupMsg ||
      message.from === "status@broadcast"
    ) {
      return;
    }

    //console.log(message);

    if (message.type === "buttons_response") {
      const handler = buttonHandlers[message.selectedButtonId];
      if (handler) {
        //await humanMessage(client, message);
        await handler(client, message);
      }
    } else {
      let db = [];
      try {
        db = JSON.parse(fs.readFileSync(`${__dirname}/../db.json`));
      } catch (err) {
        console.error("Erro ao ler o arquivo do banco de dados:", err);
      }
      const index = db.findIndex((num) => num.number === message.from);
      const now = new Date().getTime();
      if (index !== -1 && now - db[index].timestamp < 12 * 60 * 60 * 1000) {
        // 12 horas
        console.log("Não enviando mensagem, tempo mínimo não atingido.");
      } else {
        if (index !== -1) {
          db[index].timestamp = now;
        } else {
          db.push({
            number: message.from,
            timestamp: now,
          });
        }
        fs.writeFileSync(`${__dirname}/../db.json`, JSON.stringify(db));
        await firstMessage(client, message);
      }
    }
  });
}

module.exports = start;
