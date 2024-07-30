const { EmbedBuilder } = require("discord.js");
const { description } = require("../action/kiss");

module.exports = {
  name: "help",
  description: "some command",
  execute(mess, args, mention) {
    
    const embedMsg = new EmbedBuilder()
      .setAuthor({
        name: "Danh sách lệnh",
        iconURL: mess.author.displayAvatarURL(),
      })
      .addFields(
        { 
        name: "Action", 
        value: 
        " ```  ``` " 
    });

    mess.channel.send({ embeds: [embedMsg] });
  },
};
