module.exports = {
  humanMessage: async (client, message) => {
    try {
      await Promise.allSettled([
        client.sendSeen(message.from),
        new Promise((resolve) => setTimeout(resolve, 1500)),
        client.startTyping(message.from),
        new Promise((resolve) => setTimeout(resolve, 1000)),
        client.stopTyping(message.from),
      ]);
    } catch (error) {
      console.log(error);
    }
  },
};
