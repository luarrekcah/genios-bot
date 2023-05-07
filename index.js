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
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });