async function handleSolicitarOrcamento(client, message) {
    await client.sendText(
      message.from,
      "Ótimo! Para confirmar a solicitação de orçamento, preciso que você me informe os dados e o que precisa."
    );
  }

  module.exports = handleSolicitarOrcamento;