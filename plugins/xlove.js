const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/XpKLnJb/mhm.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bot Name: RedAlpha*

*Owner number : wa.me/94740979220?text=Hii%20RED%20ALPHA.%20*

 *To check update .update   To update Bot .update now*

 *RedAlpha WhatsApp Group : https://chat.whatsapp.com/Jx7f5x3wSU7D8a9ntdFB3j*
     
 *Telegram id: https://t.me/realredalpha*

 *Yt_PASSWORD: _________(message to owner)*

 *githublink : https://github.com/MhmdMukarram1/RED_ALPHA*

 *Enjoy The Red Alpha Bot  🥰*
`}) 

}));
