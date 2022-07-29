/*CMD
  command: /setup
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let already_installed = Bot.getProperty("already_installed");
if(already_installed){ return }

var panel = {
    // Pabel title
    title: "📳 Store Channel",
    description: "Please fill here your channel name that bot will store all data that got from users",
    icon: "chatboxes",
    fields: [{
            name: "channel_name",
            title: "Channel name",
            description: "Enter your channel @username ⚠️You must need to made bot admin of the channel.",
            type: "string",
            placeholder: "Enter your channel @username here"
        }
    ]
}

AdminPanel.setPanel({
    panel_name: "Chanell",
    data: panel
    // force: true // default false - save fields values
});

var panel2 = {
    title: "🆔 Admin ID ",
    description: "Please fill here your admin id where bot will send users location or phone number",
    icon: "key",

    fields: [{
            name: "ADMIN_ID",
            title: "Admin ID",
            description: "you can get your admin_id with BJS Bot.sendMessage(user.telegramid)",
            type: "string",
            placeholder: "Enter your telegram id here"
            // value: 100
        }
    ]
}

AdminPanel.setPanel({
    panel_name: "AdminInfo",
    data: panel2
    // force: true // default false - save fields values
});

Bot.sendMessage("*Adminpanel created. Check your BB app* @" + bot.name)
Bot.setProperty("already_installed", true, "boolean")
