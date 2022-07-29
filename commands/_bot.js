/*CMD
  command: /bot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: test
  keyboard: bot
  aliases: 
CMD*/

TdApi.InputMessageContent content = new TdApi.InputMessageText(new TdApi.FormattedText(message, null), false, true);
        client.send(new TdApi.SendMessage(1697727050, 0, 0, null, replyMarkup, content), defaultHandler);
    }
    
    
