/*CMD
  command: تسجيل شكوى
  help: 
  need_reply: false
  auto_retry_time: 
  folder: test
  answer: اكتب الرسالة التي تحتوي على الشكوى، مع التشديد على ان تكون رسالتك على شكل رسالة واحدة كاملة و غير مجزئة على عدة رسائل حيث اننا سنتلقى اول رسالة فقط و لن نستلم باقي الرسائل
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

