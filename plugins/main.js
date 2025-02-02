const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "allmenu",
    alias: "allmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `\n        ⭕►▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n   ▎ ＧＡＲＦＩＥＬＤ ＢＯＴ\n   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁2025\n ▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n▎ \n   █▄▄ █▀█ ▀█▀\n   █▄█ █▄█ ░█░\n⭕▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n\n╭━━〔 📥 *Download Menu* 📥 〕━━┈⊷  \n┃⬇️╭─────────────·๏  \n┃⬇️┃• facebook  \n┃⬇️┃• fb  \n┃⬇️┃• mediafire  \n┃⬇️┃• tiktok  \n┃⬇️┃• tt  \n┃⬇️┃• twitter  \n┃⬇️┃• Insta  \n┃⬇️┃• apk  \n┃⬇️┃• img  \n┃⬇️┃• spotify  \n┃⬇️┃• play  \n┃⬇️┃• play2  \n┃⬇️┃• play5  \n┃⬇️┃• video2  \n┃⬇️┃• darama  \n┃⬇️┃• ytmp3  \n┃⬇️┃• ytmp4  \n┃⬇️┃• git  \n┃⬇️┃• gdrive  \n┃⬇️└───────────┈⊷  \n╰──────────────┈⊷  \n\n╭━━〔 👥 *Group Menu* 👥 〕━━┈⊷  \n┃👥╭─────────────·๏  \n┃👥┃• grouplink  \n┃👥┃• kickall  \n┃👥┃• kickall2  \n┃👥┃• kickall3  \n┃👥┃• add  \n┃👥┃• remove  \n┃👥┃• kick  \n┃👥┃• promote  \n┃👥┃• demote  \n┃👥┃• dismiss  \n┃👥┃• revoke  \n┃👥┃• setgoodbye  \n┃👥┃• setwelcome  \n┃👥┃• delete  \n┃👥┃• getpic  \n┃👥┃• ginfo  \n┃👥┃• delete  \n┃👥┃• disappear on  \n┃👥┃• disappear off  \n┃👥┃• disappear 7D, 24H  \n┃👥┃• allreq  \n┃👥┃• updategname  \n┃👥┃• updategdesc  \n┃👥┃• joinrequests  \n┃👥┃• senddm  \n┃👥┃• nikal  \n┃👥┃• mute  \n┃👥┃• unmute  \n┃👥┃• lockgc  \n┃👥┃• unlockgc  \n┃👥┃• invite  \n┃👥┃• tag  \n┃👥┃• hidetag  \n┃👥┃• tagall  \n┃👥┃• tagadmins  \n┃👥└───────────┈⊷  \n╰──────────────┈⊷  \n\n╭━━〔 🔑 *Owner Menu* 🔑 〕━━┈⊷  \n┃🔑╭─────────────·๏  \n┃🔑┃• owner  \n┃🔑┃• menu  \n┃🔑┃• menu2  \n┃🔑┃• vv  \n┃🔑┃• antidelete set dm/gc/all  \n┃🔑┃• listcmd  \n┃🔑┃• allmenu  \n┃🔑┃• repo  \n┃🔑┃• block  \n┃🔑┃• unblock  \n┃🔑┃• fullpp  \n┃🔑┃• setpp  \n┃🔑┃• restart  \n┃🔑┃• shutdown  \n┃🔑┃• updatecmd  \n┃🔑┃• alive  \n┃🔑┃• ping  \n┃🔑┃• gjid  \n┃🔑┃• jid  \n┃🔑└───────────┈⊷  \n╰──────────────┈⊷  \n\n╭━━〔 🎉 *Fun Menu* 🎉 〕━━┈⊷  \n┃🎉╭─────────────·๏  \n┃🎉┃• shapar  \n┃🎉┃• rate  \n┃🎉┃• insult  \n┃🎉┃• hack  \n┃🎉┃• ship  \n┃🎉┃• character  \n┃🎉┃• pickup  \n┃🎉┃• joke  \n┃🎉┃• hrt  \n┃🎉┃• hpy  \n┃🎉┃• syd  \n┃🎉┃• anger  \n┃🎉┃• shy  \n┃🎉┃• kiss  \n┃🎉┃• mon  \n┃🎉┃• cunfuzed  \n┃🎉┃• setpp  \n┃🎉┃• hand  \n┃🎉┃• nikal  \n┃🎉┃• hold  \n┃🎉┃• hug  \n┃🎉└───────────┈⊷  \n╰──────────────┈⊷  \n\n╭━━〔 🔄 *Convert Menu* 🔄 〕━━┈⊷  \n┃🔄╭─────────────·๏  \n┃🔄┃• sticker | ᴘɪᴄ ᴛᴏ sᴛɪᴄᴋᴇʀ |  \n┃🔄┃• gs video to gif  \n┃🔄┃• emojimix  \n┃🔄┃• fancy  \n┃🔄┃• take  \n┃🔄┃• tomp3  \n┃🔄┃• tts  \n┃🔄┃• trt  \n┃🔄┃• base64  \n┃🔄┃• unbase64  \n┃🔄┃• binary  \n┃🔄┃• dbinary  \n┃🔄┃• tinyurl  \n┃🔄┃• urldecode  \n┃🔄┃• urlencode  \n┃🔄┃• url  \n┃🔄┃• repeat  \n┃🔄┃• ask  \n┃🔄┃• readmore  \n┃🔄└───────────┈⊷  \n╰──────────────┈⊷  \n\n╭━━〔 🤖 *AI Menu* 🤖 〕━━┈⊷  \n┃🤖╭─────────────·๏  \n┃🤖┃• ai  \n┃🤖┃• gpt3  \n┃🤖┃• gpt2  \n┃🤖┃• gptmini  \n┃🤖┃• gpt  \n┃🤖┃• meta  \n┃🤖┃• blackbox  \n┃🤖┃• luma  \n┃🤖┃• dj  \n┃🤖┃• gpt4  \n┃🤖┃• bing  \n┃🤖┃• imag  \n┃🤖┃• copilot  \n┃🤖└───────────┈⊷  \n╰──────────────┈⊷  \n\n╭━━〔 🔍 *Main Menu* 🔍 〕━━┈⊷  \n┃🔍╭─────────────·๏  \n┃🔍┃• ping  \n┃🔍┃• speed  \n┃🔍┃• live  \n┃🔍┃• alive  \n┃🔍┃• runtime  \n┃🔍┃• uptime  \n┃🔍┃• repo  \n┃🔍┃• owner  \n┃🔍┃• menu  \n┃🔍┃• menu2  \n┃🔍┃• restart  \n┃🔍└───────────┈⊷  \n╰──────────────┈⊷  \n\n╭━━〔 🎌 *Anime Menu* 🎌 〕━━┈⊷  \n┃🎌╭─────────────·๏  \n┃🎌┃• truth  \n┃🎌┃• dare  \n┃🎌┃• dog  \n┃🎌┃• awoo  \n┃🎌┃• garl  \n┃🎌┃• waifu  \n┃🎌┃• neko  \n┃🎌┃• maid  \n┃🎌┃• animegirl  \n┃🎌┃• animegirl1  \n┃🎌┃• animegirl2  \n┃🎌┃• animegirl3  \n┃🎌┃• animegirl4  \n┃🎌┃• animegirl5  \n┃🎌┃• anime1  \n┃🎌┃• anime1  \n┃🎌┃• anime2  \n┃🎌┃• anime3  \n┃🎌┃• anime4  \n┃🎌┃• anime5  \n┃🎌└───────────┈⊷  \n╰──────────────┈⊷  \n\n╭━━〔 💡 *Other Menu* 💡 〕━━┈⊷  \n┃💡╭─────────────·๏  \n┃💡┃• fact  \n┃💡┃• cpp  \n┃💡┃• rw  \n┃💡┃• pair  \n┃💡┃• pair2  \n┃💡┃• fancy  \n┃💡┃• logo <text>  \n┃💡┃• define  \n┃💡┃• news  \n┃💡┃• movie  \n┃💡┃• weather  \n┃💡┃• insult  \n┃💡┃• save  \n┃💡┃• send  \n┃💡┃• send me  \n┃💡┃• wikipedia  \n┃💡┃• gpass  \n┃💡┃• githubstalk\n┃💡┃• yts\n┃💡┃• ytv\n┃💡└───────────┈⊷\n╰──────────────┈⊷\n> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://i.ibb.co/5g7VGhC9/Picsart-25-01-30-13-20-52-736.png' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363376871871901@newsletter',
                        newsletterName: '𝖦Λ𝖱𝖥𝖨Ξ𝖫𝖣 𝖡𝖮Т',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
