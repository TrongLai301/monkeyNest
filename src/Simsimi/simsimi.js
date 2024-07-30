const simsimi = require('chats-simsimi')

function chatReq(mess) {
  if (mess.channel.id === "1264891660094144563") {
    if (mess.author.bot) return;
    simsimi(mess.content, "vn")
      .then((res) => {
        mess.reply(res.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = chatReq;
