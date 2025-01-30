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
        let dec = `
        ⭕►▁▁▁▁▁▁▁▁▁▁▁▁▁▁
   ▎ ＧＡＲＦＩＥＬＤ ＢＯＴ
   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁2025
 ▁▁▁▁▁▁▁▁▁▁▁▁▁▁
▎ 
   █▄▄ █▀█ ▀█▀
   █▄█ █▄█ ░█░
⭕▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁


╭━━〔 📥 *Download Menu* 📥 〕━━┈⊷  
┃⬇️╭─────────────·๏  
┃⬇️┃• facebook  
┃⬇️┃• fb  
┃⬇️┃• mediafire  
┃⬇️┃• tiktok  
┃⬇️┃• tt  
┃⬇️┃• twitter  
┃⬇️┃• Insta  
┃⬇️┃• apk  
┃⬇️┃• img  
┃⬇️┃• spotify  
┃⬇️┃• play  
┃⬇️┃• play2  
┃⬇️┃• play5  
┃⬇️┃• video2  
┃⬇️┃• darama  
┃⬇️┃• ytmp3  
┃⬇️┃• ytmp4  
┃⬇️┃• git  
┃⬇️┃• gdrive  
┃⬇️└───────────┈⊷  
╰──────────────┈⊷  

╭━━〔 👥 *Group Menu* 👥 〕━━┈⊷  
┃👥╭─────────────·๏  
┃👥┃• grouplink  
┃👥┃• kickall  
┃👥┃• kickall2  
┃👥┃• kickall3  
┃👥┃• add  
┃👥┃• remove  
┃👥┃• kick  
┃👥┃• promote  
┃👥┃• demote  
┃👥┃• dismiss  
┃👥┃• revoke  
┃👥┃• setgoodbye  
┃👥┃• setwelcome  
┃👥┃• delete  
┃👥┃• getpic  
┃👥┃• ginfo  
┃👥┃• delete  
┃👥┃• disappear on  
┃👥┃• disappear off  
┃👥┃• disappear 7D, 24H  
┃👥┃• allreq  
┃👥┃• updategname  
┃👥┃• updategdesc  
┃👥┃• joinrequests  
┃👥┃• senddm  
┃👥┃• nikal  
┃👥┃• mute  
┃👥┃• unmute  
┃👥┃• lockgc  
┃👥┃• unlockgc  
┃👥┃• invite  
┃👥┃• tag  
┃👥┃• hidetag  
┃👥┃• tagall  
┃👥┃• tagadmins  
┃👥└───────────┈⊷  
╰──────────────┈⊷  

╭━━〔 🔑 *Owner Menu* 🔑 〕━━┈⊷  
┃🔑╭─────────────·๏  
┃🔑┃• owner  
┃🔑┃• menu  
┃🔑┃• menu2  
┃🔑┃• vv  
┃🔑┃• antidelete set dm/gc/all  
┃🔑┃• listcmd  
┃🔑┃• allmenu  
┃🔑┃• repo  
┃🔑┃• block  
┃🔑┃• unblock  
┃🔑┃• fullpp  
┃🔑┃• setpp  
┃🔑┃• restart  
┃🔑┃• shutdown  
┃🔑┃• updatecmd  
┃🔑┃• alive  
┃🔑┃• ping  
┃🔑┃• gjid  
┃🔑┃• jid  
┃🔑└───────────┈⊷  
╰──────────────┈⊷  

╭━━〔 🎉 *Fun Menu* 🎉 〕━━┈⊷  
┃🎉╭─────────────·๏  
┃🎉┃• shapar  
┃🎉┃• rate  
┃🎉┃• insult  
┃🎉┃• hack  
┃🎉┃• ship  
┃🎉┃• character  
┃🎉┃• pickup  
┃🎉┃• joke  
┃🎉┃• hrt  
┃🎉┃• hpy  
┃🎉┃• syd  
┃🎉┃• anger  
┃🎉┃• shy  
┃🎉┃• kiss  
┃🎉┃• mon  
┃🎉┃• cunfuzed  
┃🎉┃• setpp  
┃🎉┃• hand  
┃🎉┃• nikal  
┃🎉┃• hold  
┃🎉┃• hug  
┃🎉└───────────┈⊷  
╰──────────────┈⊷  

╭━━〔 🔄 *Convert Menu* 🔄 〕━━┈⊷  
┃🔄╭─────────────·๏  
┃🔄┃• sticker | ᴘɪᴄ ᴛᴏ sᴛɪᴄᴋᴇʀ |  
┃🔄┃• gs video to gif  
┃🔄┃• emojimix  
┃🔄┃• fancy  
┃🔄┃• take  
┃🔄┃• tomp3  
┃🔄┃• tts  
┃🔄┃• trt  
┃🔄┃• base64  
┃🔄┃• unbase64  
┃🔄┃• binary  
┃🔄┃• dbinary  
┃🔄┃• tinyurl  
┃🔄┃• urldecode  
┃🔄┃• urlencode  
┃🔄┃• url  
┃🔄┃• repeat  
┃🔄┃• ask  
┃🔄┃• readmore  
┃🔄└───────────┈⊷  
╰──────────────┈⊷  

╭━━〔 🤖 *AI Menu* 🤖 〕━━┈⊷  
┃🤖╭─────────────·๏  
┃🤖┃• ai  
┃🤖┃• gpt3  
┃🤖┃• gpt2  
┃🤖┃• gptmini  
┃🤖┃• gpt  
┃🤖┃• meta  
┃🤖┃• blackbox  
┃🤖┃• luma  
┃🤖┃• dj  
┃🤖┃• gpt4  
┃🤖┃• bing  
┃🤖┃• imag  
┃🤖┃• copilot  
┃🤖└───────────┈⊷  
╰──────────────┈⊷  

╭━━〔 🔍 *Main Menu* 🔍 〕━━┈⊷  
┃🔍╭─────────────·๏  
┃🔍┃• ping  
┃🔍┃• speed  
┃🔍┃• live  
┃🔍┃• alive  
┃🔍┃• runtime  
┃🔍┃• uptime  
┃🔍┃• repo  
┃🔍┃• owner  
┃🔍┃• menu  
┃🔍┃• menu2  
┃🔍┃• restart  
┃🔍└───────────┈⊷  
╰──────────────┈⊷  

╭━━〔 🎌 *Anime Menu* 🎌 〕━━┈⊷  
┃🎌╭─────────────·๏  
┃🎌┃• truth  
┃🎌┃• dare  
┃🎌┃• dog  
┃🎌┃• awoo  
┃🎌┃• garl  
┃🎌┃• waifu  
┃🎌┃• neko  
┃🎌┃• maid  
┃🎌┃• animegirl  
┃🎌┃• animegirl1  
┃🎌┃• animegirl2  
┃🎌┃• animegirl3  
┃🎌┃• animegirl4  
┃🎌┃• animegirl5  
┃🎌┃• anime1  
┃🎌┃• anime1  
┃🎌┃• anime2  
┃🎌┃• anime3  
┃🎌┃• anime4  
┃🎌┃• anime5  
┃🎌└───────────┈⊷  
╰──────────────┈⊷  

╭━━〔 💡 *Other Menu* 💡 〕━━┈⊷  
┃💡╭─────────────·๏  
┃💡┃• fact  
┃💡┃• cpp  
┃💡┃• rw  
┃💡┃• pair  
┃💡┃• pair2  
┃💡┃• fancy  
┃💡┃• logo <text>  
┃💡┃• define  
┃💡┃• news  
┃💡┃• movie  
┃💡┃• weather  
┃💡┃• insult  
┃💡┃• save  
┃💡┃• send  
┃💡┃• send me  
┃💡┃• wikipedia  
┃💡┃• gpass  
┃💡┃• githubstalk
┃💡┃• yts
┃💡┃• ytv
┃💡└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `${config.ALIVE_IMG}` },
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
