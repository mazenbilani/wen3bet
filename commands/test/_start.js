/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: test

  <<ANSWER
اهلا بكم بخدمة الرد التلقائي في غروب وين عبيت
هذه الخدمة مخصصة فقط للخيارات الثلاثة التالية
 
-تسجيل شكوى تتعلق بالازعاجات على المجموعة العامة 
-تسجيل اقتراح يتعلق بعمل المجموعة العامة 
-طلب نشر اعلان ضمن المجموعة 

و غير مخصص للسؤال عن الكازيات و تواريخها و وضعها و لن تتم الاجابة عن اي اسئلة تتعلق بالكازيات 
للاستمرار يرجى الضغط على زر المتابعة بالاسفل حيث ان ادارة وين عبيت ملتزمة بالحفاظ على سرية اعضائها 
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: مرحبا, ., hi
CMD*/

let text = " مرحبا بك " +
    '<a href="' + 'tg://user?id=' + 
       user.telegramid + '">' + user.first_name +
    '</a> ' +
    " " 

var keyboard = [
    [{
        text: " اضغط للمتابعة ",
        request_contact: true
    }],
]

Api.sendMessage({
    text: text,
    parse_mode: "html",
    reply_markup: {
        keyboard: keyboard,
        resize_keyboard: true // for big buttons
    }
});


