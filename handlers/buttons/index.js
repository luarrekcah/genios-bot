const handleSolicitarOrcamento = require("./fun/solicitarOrcamento"),
  handleCatalogos = require("./fun/catalogos"),
  handleRedes = require("./fun/redes"),
  handleTalkAssistant = require("./fun/falarAtendente");

const buttonHandlers = {
  "solicitar-orcamento": handleSolicitarOrcamento,
  "catalogos": handleCatalogos,
  "redes-sociais": handleRedes,
  "falar-com-atendente": handleTalkAssistant,
};

module.exports = buttonHandlers;
