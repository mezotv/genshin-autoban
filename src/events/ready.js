require("dotenv").config();

module.exports = async (client) => {
  
  client.user.setPresence({
    activities: [{ name: 'Genshin Impact' }],
    status: "online",
  });
};
