let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • tri [0895605030379]
│ • Telkomsel [081357302007]
│ • Gopay [0895605030379]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/62895605030379
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 0895605030379
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
