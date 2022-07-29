/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

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

Bot.sendMessage(" تم ارسال رسالتك الى المشرف المختص و سيتم الرد عليك باسرع وقت ممكن ،شكرا لاستخدامكم المجيب الالي لغروب وين عبيت ");


