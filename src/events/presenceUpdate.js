const { punishment, } = require('../../config.json');
module.exports = (client, oldPresence, newPresence) => {

  if(!newPresence?.activities[0]?.state) return;
  if(oldPresence === newPresence) return;

  if(newPresence?.activities[0]?.state === "Genshin Impact")
  {
    switch(punishment.toLocaleLowerCase())
    {
      case "kick":
        {
          newPresence.member.kick("Genshin Impact player").then(console.log("Successfully kicked " +  newPresence.member.user.username + " with reason 'Genshin Impact player'")).catch(err => console.log(err));
        break;
        }
      case "ban":
        {
        newPresence.member.ban({reason: "Genshin Impact player"}).then(console.log("Successfully banned " +  newPresence.member.user.username + " with reason 'Genshin Impact player'")).catch(err => console.log(err));
        break;
        }
    }  
  }
  };
