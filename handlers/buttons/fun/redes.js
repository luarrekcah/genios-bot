async function handleRedes(client, message) {
  await client.sendText(
    message.from,
    "Nossas redes sociais são:\n\nInstagram: instagram.com/agencia.genios\nPágina no Facebook: www.facebook.com/agenciagenios\nNosso site: agenciagenios.com"
  );
}

module.exports = handleRedes;
