async function firstMessage(client, message) {
    const buttons = [
        {
          buttonText: {
            displayText: "Catálogo e valores",
          },
          buttonId: "catalogos",
        },
        {
          buttonText: {
            displayText: "Ver redes sociais",
          },
          buttonId: "redes-sociais",
        },
        {
          buttonText: {
            displayText: "Falar com profissional (orçamento e dúvidas)",
          },
          buttonId: "falar-com-atendente",
        },
      ];

      await client.sendButtons(
        message.from,
        `Olá ${message.sender.shortName}! Seja bem vindo(a) ao atendimento automatizado da Agência Gênios! 🚀`,
        buttons,
        "Selecione uma opção"
      );
  }

  module.exports = {firstMessage};