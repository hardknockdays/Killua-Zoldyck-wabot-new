const { fetchUrl, sleep, clockString } = require("../../lib/Function")

module.exports = {
    name: "bisakah",
    alias: ["bisakah"],
    desc: "Ren Bisakah",
    type: "ren",
    start: async (killua, m, { text }) => {
        if (!text) return m.reply(`Example: ${prefix + command} kamu memasak ?`)
        const tanya = ['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
        const jawab = tanya[Math.floor(Math.random() * tanya.length)]
        m.reply(`Pertanyaan : ${text}\n\nJawaban : ${jawab}`)
    }
}