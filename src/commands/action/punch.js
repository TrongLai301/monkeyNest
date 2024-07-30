const { EmbedBuilder } = require("discord.js");
const baseAction = require("./base/base");
const gif = [
  {
    url: "https://i.pinimg.com/originals/8d/50/60/8d50607e59db86b5afcc21304194ba57.gif",
  },
  {
    url: "https://i.pinimg.com/originals/df/8a/f2/df8af24e5756ecf4a4e8af0c9ea6499b.gif",
  },
  {
    url: "https://i.pinimg.com/originals/79/29/6b/79296b3ba64683b40452454247008b0b.gif",
  },
  {
    url: "https://i.pinimg.com/originals/d5/ce/af/d5ceaf6775e97535ace2797768c18603.gif",
  },
];
const title1 = [
  {
    title: "đã đấm thẳng vào mặt",
  },
  {
    title: "đã xúc",
  },
  {
    title: "đã va",
  },
  {
    title: "đấm phát chết luôn",
  },
];
const title2 = [
  {
    title: "hết nước chấm",
  },
  {
    title: "mày hả bưởi",
  },
  {
    title: "một phát là ngất ngay",
  },
  {
    title: "hết cứu",
  },
];
const replyErr = [
  {title:'Ể...ể...hãy chỉ rõ đích danh người bạn muốn đấm đê!!!'},
  {title:'Xin cái địa chỉ người bạn muốn đấm nào'}
]
const titleAction = [
  {title:'Đấm cho cái một'},
  {title:'Haha bị ăn đấm'}
]

module.exports = {
  name: "punch",
  description: "punch someone",
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

