let user = require('yt-search')
let handler = async(m, { conn, text:users }) => {
  text = users.replace(/@/gi, '')
    if (!text) throw 'Masukan parameter, Contoh *#ytstalk gustixa*'

  m.reply('Sedang di proses kak:D')
 let { url, image, subCount, subCountLabel, videoCount, name } = (await user(text)).channels[0]
	 	let hasil = `š *Name* : ${name}\nš *Subscribers* : ${subCount} *( ${subCountLabel} )*\nš„ *Video Count* : ${videoCount} Videos\nš Link : ${url}`

   buffer = await require('node-fetch')(image).then(v => v.buffer());
conn.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: hasil })
}
handler.help = ['ytstalk'].map(v => v + ' <username>')
handler.tags = ['internet']
handler.command = /^(yt|youtube)stalk$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler