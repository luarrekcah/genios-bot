async function handleCatalogos(client, message) {
    await client.sendText(
      message.from,
      "Acesse nosso catálogo geral nesse link: https://docs.google.com/document/d/1xti7Kk5YGsONPDC4Ph0UpxSeGDzhOtwUIZyibfKoGT0/edit?usp=sharing"
    );
  }

  module.exports = handleCatalogos;