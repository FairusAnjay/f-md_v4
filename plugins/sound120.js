import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/soundultah.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UCW2DZKUQ1J7JrvX7nrpTgZQ",
    mediaType: 2,
    description: "https://youtube.com/channel/UCW2DZKUQ1J7JrvX7nrpTgZQ", 
    title: 'Ν’π½πΝ’ΰ½Ίππ΅βπ― ΰ½ΊΰΎβ πΉΝ’π’ΰ½ΊπͺΝ’π€ππΰ½³ππ·ΰΎπ₯.',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['soundultah']
handler.help = ['soundultah']
handler.tags = ['sounds']
export default handler