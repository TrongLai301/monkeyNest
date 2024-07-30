const { EmbedBuilder } = require("discord.js");
const baseAction = require("./base/base");
const gif = [
  {
    url: "https://i.pinimg.com/originals/37/63/3f/37633f0b8d39daf70a50f69293e303fc.gif",
  },
  {
    url: "https://i.pinimg.com/originals/ef/9a/ce/ef9acee2815027b5600643fab488e307.gif",
  },
  {
    url: "https://i.pinimg.com/originals/a8/dc/f0/a8dcf0d2a675d9164cd1a92add39b203.gif",
  }
];
const title1 = [
  {
    title: "hôn",
  },
  {
    title: "solo môi",
  },
];
const title2 = [
  {
    title: "hết nước chấm",
  },
  {
    title: "kìa awwww wtf",
  },
  {
    title: "omg waooooo",
  },
];
const replyErr = [
  {title:'Ể...ể...hãy chỉ rõ đích danh người bạn muốn hôn đê!!!'},
  {title:'omg hôn á, hôn ai vậy... ?'}
]
const titleAction = [
  {title:'Phát một luôn, ngầu đét!!!'},
  {title:'Vãi làm thật luôn mà'}
]

module.exports = {
  name: "kiss",
  description: "kiss someone",
  execute(mess, args, mention) {
    const info = {
      mention: mention,
      mess: mess,
      gif: gif,
      title1: title1,
      title2: title2,
      replyErr: replyErr,
      titleAction: titleAction,
    };
    baseAction(info);
  },
};

