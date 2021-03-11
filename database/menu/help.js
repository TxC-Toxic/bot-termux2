const help = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefijo: 「  ${prefix}  」
  ❏ Creador: ${ownerBot}
◪ *Sobre el bot*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MENU*
  │
  ├─ ❏ ${prefix}logomakermenu
  ├─ ❏ ${prefix}imagemakermenu
  ├─ ❏ ${prefix}stickermakermenu
  ├─ ❏ ${prefix}educationmenu
  ├─ ❏ ${prefix}downloadermenu
  ├─ ❏ ${prefix}groupmenu
  ├─ ❏ ${prefix}soundmenu
  ├─ ❏ ${prefix}musicmenu
  ├─ ❏ ${prefix}stalkmenu
  ├─ ❏ ${prefix}18+menu
  ├─ ❏ ${prefix}funmenu
  ├─ ❏ ${prefix}informationmenu
  ├─ ❏ ${prefix}ownermenu
  └─ ❏ ${prefix}othermenu
◪ *Otros*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}virtex
  ├─ ❏ ${prefix}timer
  ├─ ❏ ${prefix}fml
  └───────────────── 
}
exports.help = help
