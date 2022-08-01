/*CMD
  command: تسجيل اقتراح
  help: 
  need_reply: false
  auto_retry_time: 
  folder: test
  answer: اكتب رسالة تحتوي على اقتراحكم، مع التشديد على ان تكون رسالتك على شكل رسالة واحدة كاملة و غير مجزئة على عدة رسائل حيث اننا سنتلقى اول رسالة فقط و لن نستلم باقي الرسائل
  keyboard: عودة الى البداية
  aliases: 
CMD*/

Bot.runCommand("/message")

// Automatic fix
var msg;

// Automatic fix
var msg;


var user_link = Libs.commonLib.getLinkFor(user)

msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  874516231, msg
);

/*
Api.forwardMessage({ 
 chat_id: 874516231,
 message_id: request.message_id
});
*/

const options = {
  method: 'POST',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  body: JSON.stringify({
    message_id: null,
    disable_notification: false,
    from_chat_id: '@Web3betmanagerBot',
    chat_id: '@wem3bet'
  })
};

fetch('https://api.telegram.org/bottoken/forwardMessage', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

