import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/soundultah.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCW2DZKUQ1J7JrvX7nrpTgZQ",
    mediaType: 2,
    description: "https://youtube.com/channel/UCW2DZKUQ1J7JrvX7nrpTgZQ", 
    title: '͢𝐽𝑈ེ͢𝑆𝛵∙冬྄ེ∙ 𝐹͢𝛢ེ𝛪͢𝛤𝑈𝑍ཱི𝑀𝐷྄𞥈.',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['soundultah']
handler.help = ['soundultah']
handler.tags = ['sounds']
export default handler