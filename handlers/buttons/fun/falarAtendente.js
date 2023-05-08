const { supNumbers } = require("../../../config.json");

async function handleTalkAssistant(client, message) {
  await client.sendText(
    message.from,
    "Ok! Em torno de 10 minutos um dos nossos profissionais irá falar com você. Enquanto isso, pode informar aqui como podemos lhe ajudar!"
  );

  for (let index = 0; index < supNumbers.length; index++) {
    const num = supNumbers[index];
    await client.sendText(
      num,
      `O número wa.me/+${message.from.replace('@c.us','')} solicitou atendimento pessoal`
    );
  }
}

module.exports = handleTalkAssistant;
