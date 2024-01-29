import TelegramBot from "node-telegram-bot-api"

const botToken = '6203104820:AAGBFzcq2nWs9JHv09KEkEvSV4tRft9UEvI';
const chatId = '1361590187';
const bot = new TelegramBot(botToken, { polling: false });

async function sendTelegramMessage(formData) {
  try {
    const message = `Новый отклик!\nИмя кандидата: ${formData.имя}\nНомер телефона кандидата: ${formData.номерТелефона}\nПочта кандидата: ${formData.email}\nПриложенная ссылка на резюме/портфолио: ${formData.ссылкаНаРезюме}`;
    await bot.sendMessage(chatId, message);
    console.log('Сообщение успешно отправлено в телеграм');
  } catch (error) {
    console.error('Ошибка отправки сообщения в телеграм:', error.message);
  }
}

export default sendTelegramMessage