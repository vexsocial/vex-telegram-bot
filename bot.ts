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
Welcome to the VEX Social family.

Use 🔐 VEX VPN and earn 1 $VP per megabyte.

We are cooking for you:
⚡VEX HUB - complete tasks
📧VEX MAIL - anonymous mail
💼 VEX WALLET - you know why ;)

Don't forget to subscribe to our channel @vexsocial

Ready?`,
  },
  ru: {
    welcomeText: `
Добро пожаловать в семью VEX Social.

Используй 🔐 VEX VPN и зарабатывай 1 $VP за мегабайт.

Мы готовим для вас:
⚡VEX HUB - выполняй задания
📧VEX MAIL - анонимная почта
💼 VEX WALLET - ты знаешь зачем ;)

Не забудь подписаться на наш канал @vexsocial

Готовы?`,
  },
  es: {
    welcomeText: `
Bienvenido a la familia VEX Social.

Usa 🔐 VEX VPN y gana 1 $VP por megabyte.

Estamos preparando para ti:
⚡VEX HUB - completa tareas
📧VEX MAIL - correo anónimo
💼 VEX WALLET - ya sabes para qué ;)

No olvides suscribirte a nuestro canal @vexsocial

¿Listo?
`,
  },
  fr: {
    welcomeText: `
Bienvenue dans la famille VEX Social.

Utilisez 🔐 VEX VPN et gagnez 1 $VP par mégaoctet.

Nous préparons pour vous :
⚡VEX HUB - accomplissez des tâches
📧VEX MAIL - mail anonyme
💼 VEX WALLET - vous savez pourquoi ;)

N'oubliez pas de vous abonner à notre chaîne @vexsocial

Prêt ?
`,
  },
  de: {
    welcomeText: `
Willkommen bei der Familie VEX Social.

Nutze 🔐 VEX VPN und verdiene 1 $VP pro Megabyte.

Wir bereiten für dich vor:
⚡VEX HUB - Aufgaben erledigen
📧VEX MAIL - anonyme E-Mails
💼 VEX WALLET - du weißt warum ;)

Vergiss nicht, unseren Kanal @vexsocial zu abonnieren

Bereit?
`,
  },
  it: {
    welcomeText: `
Benvenuto nella famiglia VEX Social.

Usa 🔐 VEX VPN e guadagna 1 $VP per megabyte.

Stiamo preparando per te:
⚡VEX HUB - completa i compiti
📧VEX MAIL - posta anonima
💼 VEX WALLET - sai perché ;)

Non dimenticare di iscriverti al nostro canale @vexsocial

Pronto?
`,
  },
  zh: {
    welcomeText: `
欢迎加入VEX Social大家庭。

使用🔐 VEX VPN，每兆赚取1 $VP。

我们正在为你准备：
⚡VEX HUB - 完成任务
📧VEX MAIL - 匿名邮件
💼 VEX WALLET - 你知道为什么 ;)

别忘了订阅我们的频道 @vexsocial

准备好了吗？
`,
  },
  hi: {
    welcomeText: `
VEX Social परिवार में आपका स्वागत है।

🔐 VEX VPN का उपयोग करें और प्रति मेगाबाइट 1 $VP कमाएं।

हम आपके लिए तैयार कर रहे हैं:
⚡VEX HUB - $VP के लिए कार्य
📧VEX MAIL - गुमनाम मेल
💼 VEX WALLET - जानते हैं क्यों? ;)

हमारे चैनल @vexsocial को सब्सक्राइब करना न भूलें

तैयार हैं?
`,
  },
  id: {
    welcomeText: `
Selamat datang di keluarga VEX Social.

Gunakan 🔐 VEX VPN dan dapatkan 1 $VP per megabyte.

Kami sedang menyiapkan untukmu:
⚡VEX HUB - selesaikan tugas
📧VEX MAIL - email anonim
💼 VEX WALLET - tahu kenapa? ;)

Jangan lupa subscribe channel kami @vexsocial

Siap?
`,
  },
  ja: {
    welcomeText: `
VEX Socialファミリーへようこそ。

🔐 VEX VPNを使用して、1メガバイトごとに1 $VPを獲得しましょう。

私たちはあなたのために準備しています：
⚡VEX HUB - タスクを完了
📧VEX MAIL - 匿名メール
💼 VEX WALLET - 理由を知っていますか？ ;)

私たちのチャンネル @vexsocial を忘れずに購読してください

準備はできましたか？
`,
  },
  ko: {
    welcomeText: `
VEX Social 가족에 오신 것을 환영합니다.

🔐 VEX VPN을 사용하고 메가바이트당 1 $VP를 획득하세요.

우리는 당신을 위해 준비 중입니다:
⚡VEX HUB - 작업 완료
📧VEX MAIL - 익명 메일
💼 VEX WALLET - 이유를 알고 있습니까? ;)

우리 채널 @vexsocial을 구독하는 것을 잊지 마세요

준비되셨나요?
`,
  },
  pt: {
    welcomeText: `
Bem-vindo à família VEX Social.

Use 🔐 VEX VPN e ganhe 1 $VP por megabyte.

Estamos preparando para você:
⚡VEX HUB - complete tarefas
📧VEX MAIL - email anônimo
💼 VEX WALLET - sabe por quê? ;)

Não se esqueça de se inscrever no nosso canal @vexsocial

Pronto?
`,
  },
  vi: {
    welcomeText: `
Chào mừng đến với gia đình VEX Social.

Sử dụng 🔐 VEX VPN và kiếm 1 $VP mỗi megabyte.

Chúng tôi đang chuẩn bị cho bạn:
⚡VEX HUB - hoàn thành nhiệm vụ
📧VEX MAIL - thư ẩn danh
💼 VEX WALLET - bạn biết tại sao không? ;)

Đừng quên đăng ký kênh của chúng tôi @vexsocial

Sẵn sàng chưa?
`,
  },
  uk: {
    welcomeText: `
Ласкаво просимо до сім'ї VEX Social.

Використовуйте 🔐 VEX VPN і заробляйте 1 $VP за мегабайт.

Ми готуємо для вас:
⚡VEX HUB - виконуйте завдання
📧VEX MAIL - анонімна пошта
💼 VEX WALLET - знаєте навіщо? ;)

Не забудьте підписатися на наш канал @vexsocial

Готові?
`,
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
