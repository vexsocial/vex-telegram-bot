const CONFIG = {
  TELEGRAM_API_URL: `https://api.telegram.org/bot${ENV_BOT_TOKEN}/`,
  WELCOME_IMAGE_URL:
    "https://cdn.midjourney.com/b2782367-5cec-4bfb-bc55-31f7a00fb8b1/0_3.png",
  VEX_APP_URL: "https://app.vex.so",
  VEX_SOCIAL_URL: "https://t.me/vexsocial",
};

const localizations = {
  en: {
    welcomeText: `
Welcome to VEX Social — the world of your privacy and freedom.

Use 🔐 VEX VPN and earn 1 $VP per megabyte.

We are cooking for you:
⚡VEX HUB - quests for $VP
📧VEX MAIL - anonymous mail 
💼 VEX WALLET - know why? ;)

Ready for freedom?`,
  },
  ru: {
    welcomeText: `
Добро пожаловать в семью VEX Social.

Используйте 🔐 VEX VPN и зарабатывайте 1 $VP за мегабайт.

Мы готовим для вас:
⚡VEX HUB - выполняйте задания
📧VEX MAIL - анонимная почта
💼 VEX WALLET - вы знаете зачем ;)

Готовы к настоящей свободе?`,
  },
  es: {
    welcomeText: `
Bienvenido a la familia VEX Social.

Usa 🔐 VEX VPN y gana 1 $VP por megabyte.

Estamos cocinando para ti:
⚡VEX HUB - completa misiones
📧VEX MAIL - correo anónimo
💼 VEX WALLET - ya sabes para qué ;)

¿Listo para la verdadera libertad?`,
  },
  fr: {
    welcomeText: `
Bienvenue dans la famille VEX Social.

Utilisez 🔐 VEX VPN et gagnez 1 $VP par mégaoctet.

Nous préparons pour vous :
⚡VEX HUB - accomplissez des quêtes
📧VEX MAIL - mail anonyme
💼 VEX WALLET - vous savez pourquoi ;)

Prêt pour la vraie liberté ?`,
  },
  de: {
    welcomeText: `
Willkommen bei der Familie VEX Social.

Nutze 🔐 VEX VPN und verdiene 1 $VP pro Megabyte.

Wir bereiten für dich vor:
⚡VEX HUB - Quests abschließen
📧VEX MAIL - anonyme Mail
💼 VEX WALLET - du weißt schon, wofür ;)

Bereit für echte Freiheit?`,
  },
  it: {
    welcomeText: `
Benvenuto nella famiglia VEX Social.

Usa 🔐 VEX VPN e guadagna 1 $VP per megabyte.

Stiamo preparando per te:
⚡VEX HUB - completa le missioni
📧VEX MAIL - posta anonima
💼 VEX WALLET - sai perché ;)

Pronto per la vera libertà?`,
  },
  zh: {
    welcomeText: `
欢迎来到VEX Social — 隐私和自由的世界。

使用🔐 VEX VPN，每兆赚取1 $VP。

我们正在为你准备：
⚡VEX HUB - 完成任务
📧VEX MAIL - 匿名邮件
💼 VEX WALLET - 你知道为什么 ;)

准备好迎接真正的自由了吗？`,
  },
};

const buttons = [
  [{ text: "Launch VEX", web_app: { url: CONFIG.VEX_APP_URL } }],
  [{ text: "Join VEX Social", url: CONFIG.VEX_SOCIAL_URL }],
];

async function sendTelegramPhoto(
  chatId: number,
  imageUrl: string,
  caption: string
) {
  return fetch(`${CONFIG.TELEGRAM_API_URL}sendPhoto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      photo: imageUrl,
      caption: caption,
      reply_markup: { inline_keyboard: buttons },
    }),
  });
}

async function handleStartCommand(chatId: number, languageCode: string) {
  const userLang = localizations[languageCode] ? languageCode : "en";
  const { welcomeText } = localizations[userLang];

  await sendTelegramPhoto(chatId, CONFIG.WELCOME_IMAGE_URL, welcomeText);
}

async function handleRequest(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { message } = await request.json();
  if (message?.text === "/start") {
    const { id: chatId } = message.chat;
    const { language_code: langCode = "en" } = message.from;
    await handleStartCommand(chatId, langCode);
  }

  return new Response("OK");
}

// Слушаем события
addEventListener("fetch", (event: any) => {
  event.respondWith(handleRequest(event.request));
});
