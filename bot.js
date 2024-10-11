const TELEGRAM_API_URL = `https://api.telegram.org/bot${ENV_BOT_TOKEN}/`;

// URL для изображения
const WELCOME_IMAGE_URL =
  "https://cdn.midjourney.com/b2782367-5cec-4bfb-bc55-31f7a00fb8b1/0_3.png";

// Локализации
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
    buttons: [
      [{ text: "Launch VEX", web_app: { url: "https://app.telegram.vex.so" } }],
      [{ text: "Join VEX Social", url: "https://t.me/vexsocial" }],
    ],
  },
  ru: {
    welcomeText: `
Добро пожаловать в VEX Social — мир вашей приватности и свободы.

Используйте 🔐 VEX VPN и зарабатывайте 1 $VP за мегабайт.

Мы готовим для вас:
⚡VEX HUB - выполняйте задания
📧VEX MAIL - анонимная почта
💼 VEX WALLET - вы знаете зачем ;)

Готовы к настоящей свободе?`,
    buttons: [
      [
        {
          text: "Запустить VEX",
          web_app: { url: "https://app.telegram.vex.so" },
        },
      ],
      [{ text: "Присоединиться к VEX Social", url: "https://t.me/vexsocial" }],
    ],
  },
  es: {
    welcomeText: `
Bienvenido a VEX Social — el mundo de tu privacidad y libertad.

Usa 🔐 VEX VPN y gana 1 $VP por megabyte.

Estamos cocinando para ti:
⚡VEX HUB - completa misiones
📧VEX MAIL - correo anónimo
💼 VEX WALLET - ya sabes para qué ;)

¿Listo para la verdadera libertad?`,
    buttons: [
      [{ text: "Lanzar VEX", web_app: { url: "https://app.telegram.vex.so" } }],
      [{ text: "Únete a VEX Social", url: "https://t.me/vexsocial" }],
    ],
  },
  fr: {
    welcomeText: `
Bienvenue dans VEX Social — le monde de votre confidentialité et liberté.

Utilisez 🔐 VEX VPN et gagnez 1 $VP par mégaoctet.

Nous préparons pour vous :
⚡VEX HUB - accomplissez des quêtes
📧VEX MAIL - mail anonyme
💼 VEX WALLET - vous savez pourquoi ;)

Prêt pour la vraie liberté ?`,
    buttons: [
      [{ text: "Lancer VEX", web_app: { url: "https://app.telegram.vex.so" } }],
      [{ text: "Rejoindre VEX Social", url: "https://t.me/vexsocial" }],
    ],
  },
  de: {
    welcomeText: `
Willkommen bei VEX Social — der Welt Ihrer Privatsphäre und Freiheit.

Nutze 🔐 VEX VPN und verdiene 1 $VP pro Megabyte.

Wir bereiten für dich vor:
⚡VEX HUB - Quests abschließen
📧VEX MAIL - anonyme Mail
💼 VEX WALLET - du weißt schon, wofür ;)

Bereit für echte Freiheit?`,
    buttons: [
      [
        {
          text: "VEX starten",
          web_app: { url: "https://app.telegram.vex.so" },
        },
      ],
      [{ text: "Tritt VEX Social bei", url: "https://t.me/vexsocial" }],
    ],
  },
  it: {
    welcomeText: `
Benvenuto in VEX Social — il mondo della tua privacy e libertà.

Usa 🔐 VEX VPN e guadagna 1 $VP per megabyte.

Stiamo preparando per te:
⚡VEX HUB - completa le missioni
📧VEX MAIL - posta anonima
💼 VEX WALLET - sai perché ;)

Pronto per la vera libertà?`,
    buttons: [
      [{ text: "Avvia VEX", web_app: { url: "https://app.telegram.vex.so" } }],
      [{ text: "Unisciti a VEX Social", url: "https://t.me/vexsocial" }],
    ],
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
    buttons: [
      [{ text: "启动VEX", web_app: { url: "https://app.telegram.vex.so" } }],
      [{ text: "加入VEX Social", url: "https://t.me/vexsocial" }],
    ],
  },
};

async function sendPhotoWithButtons(chatId, imageUrl, caption, buttons) {
  return fetch(`${TELEGRAM_API_URL}sendPhoto`, {
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

async function handleStartCommand(message) {
  const chatId = message.chat.id;
  const userLang = message.from.language_code || "en";
  const localization = localizations[userLang] || localizations["en"];

  await sendPhotoWithButtons(
    chatId,
    WELCOME_IMAGE_URL,
    localization.welcomeText,
    localization.buttons
  );
}

async function handleRequest(request) {
  if (request.method === "POST") {
    const { message } = await request.json();

    if (message?.text === "/start") {
      await handleStartCommand(message);
    }

    return new Response("OK");
  }

  return new Response("Method not allowed", { status: 405 });
}

// Слушаем события
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
