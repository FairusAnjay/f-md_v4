import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = 'https://telegra.ph/file/e6184fe12e3f0b42b418d.mp4'
    return conn.sendButton(m.chat, 'Donasi Buat Gift Alok :D\n\nPulsa Indosat: 085649064565', thumbnail, img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/fairuzzgapunyaduit",
                mediaType: "VIDEO",
                title: 'Donasi To FairuzXD',
                body: wm,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasiv2']

handler.tags = ['info']

handler.command = /^(donasiv2|donatev2)$/i


export default handler
