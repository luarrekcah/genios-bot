const venom = require("venom-bot");
const start = require("./core");

venom
  .create({
    session: "bot",
    disableWelcome: true,
    disableSpins: true,
    updatesLog: true,
    logQR: true,
  })
  .then((client) => {
    try {
      start(client);
    } catch (error) {
      console.log(error);
    }
  })
  .catch((erro) => {
    console.log(erro);
  });