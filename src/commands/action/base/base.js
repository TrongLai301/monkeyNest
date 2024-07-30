const { EmbedBuilder } = require("discord.js");

function baseAction(info) {
  const messenger = info.mess;
  if (info.mention) {
    const gifRd = random(info.gif, `url`);
    const title1Rd = random(info.title1, `title`);
    const title2Rd = random(info.title2, `title`);
    const titleAction = random(info.titleAction, `title`);
    const mention = info.mention;
    const embed = new EmbedBuilder()
      .setDescription(
        `<@${messenger.author.id}> ${title1Rd} <@${mention.id}> ${title2Rd}`
      )
      .setTitle(titleAction)
      .setTimestamp()
      .setImage(gifRd);
    messenger.channel.send({ embeds: [embed] });
  } else {
    const replyErr = random(info.replyErr, `title`);
    messenger.reply(replyErr).then((res) => {
      setTimeout(() => {
        res.delete();
        messenger.delete();
      }, 5000);
    });
  }
}
function random(arr, elm) {
  if (arr) {
    const indexRd = Math.floor(Math.random() * arr.length);
    const result = arr[indexRd][elm];
    return result;
  } else {
    return ""
  }
}

module.exports = baseAction;
