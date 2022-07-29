/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: test

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.contact) {
    Bot.run({
        command: "send-contact",
        options: {
            phone_number: request.contact.phone_number
        }
    })
}

if (request.location) {
    Bot.run({
        command: "send-location",
        options: {
            location: request.location
        }
    })
}



