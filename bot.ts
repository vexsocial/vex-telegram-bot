const CONFIG = {
  TELEGRAM_API_URL: `https://api.telegram.org/bot${ENV_BOT_TOKEN}/`,
  WELCOME_IMAGE_URL:
    "https://cdn.midjourney.com/b2782367-5cec-4bfb-bc55-31f7a00fb8b1/0_3.png",
  VEX_APP_URL: "https://app.vex.so",
  VEX_SOCIAL_URL: "https://t.me/vexvpnsocial",
};

const localizations = {
  en: {
    welcomeText: `
🇺🇸 VEX VPN – your gateway to a secure and open internet.

🔐 Connect to VEX VPN and earn 1 $VP for every protected megabyte.
🤝🏻 Invite friends and get 5 GigaPasses = 5 GB for both of you!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET are coming soon!
Ready to connect and farm?`,
    buttons: [
      [{ text: "Connect VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Join VEX VPN Channel", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  ru: {
    welcomeText: `
🇷🇺 VEX VPN – ваш проводник в безопасный и открытый интернет.

🔐 Подключайтесь к VEX VPN и зарабатывайте 1 $VP за каждый мегабайт защищённого трафика.
🤝🏻 Приглашайте друзей и получайте 5 GigaPass = 5 ГБ для вас обоих!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET скоро будут доступны!
Готовы подключиться и фармить?`,
    buttons: [
      [{ text: "Подключить VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Присоединиться к каналу VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  es: {
    welcomeText: `
🇪🇸 VEX VPN – tu puerta de acceso a un internet seguro y abierto.

🔐 Conéctate a VEX VPN y gana 1 $VP por cada megabyte protegido.
🤝🏻 Invita a amigos y obtén 5 GigaPass = 5 GB para ambos!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET estarán disponibles pronto!
¿Listo para conectarte y ganar?`,
    buttons: [
      [{ text: "Conectar VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Únete al canal de VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  fr: {
    welcomeText: `
🇫🇷 VEX VPN – votre accès à un internet sécurisé et ouvert.

🔐 Connectez-vous à VEX VPN et gagnez 1 $VP pour chaque mégaoctet protégé.
🤝🏻 Invitez des amis et obtenez 5 GigaPass = 5 Go pour vous deux!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET arrivent bientôt!
Prêt à vous connecter et à gagner?`,
    buttons: [
      [{ text: "Connecter VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Rejoindre le canal VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  de: {
    welcomeText: `
🇩🇪 VEX VPN – Ihr Tor zu einem sicheren und offenen Internet.

🔐 Verbinden Sie sich mit VEX VPN und verdienen Sie 1 $VP für jedes geschützte Megabyte.
🤝🏻 Laden Sie Freunde ein und erhalten Sie 5 GigaPass = 5 GB für Sie beide!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET kommen bald!
Bereit zum Verbinden und Farmen?`,
    buttons: [
      [{ text: "VEX VPN verbinden", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Dem VEX VPN Kanal beitreten", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  it: {
    welcomeText: `
🇮🇹 VEX VPN – il tuo accesso a un internet sicuro e aperto.

🔐 Connettiti a VEX VPN e guadagna 1 $VP per ogni megabyte protetto.
🤝🏻 Invita gli amici e ricevi 5 GigaPass = 5 GB per entrambi!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET stanno per arrivare!
Pronto a connetterti e guadagnare?`,
    buttons: [
      [{ text: "Connetti VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Unisciti al canale VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  zh: {
    welcomeText: `
🇨🇳 VEX VPN – 进入安全开放互联网的通道。

🔐 连接 VEX VPN，您将获得每兆流量 1 $VP 的奖励。
🤝🏻 邀请朋友，您们双方可获得 5 GigaPass = 5 GB 的流量!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET 即将推出!
准备好连接和赚取了吗？`,
    buttons: [
      [{ text: "连接 VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "加入 VEX VPN 频道", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  hi: {
    welcomeText: `
🇮🇳 VEX VPN – आपका सुरक्षित और खुला इंटरनेट में प्रवेश। 

🔐 VEX VPN से कनेक्ट करें और हर मेगाबाइट सुरक्षित ट्रैफ़िक के लिए 1 $VP कमाएं।
🤝🏻 दोस्तों को आमंत्रित करें और दोनों के लिए 5 GigaPass = 5 जीबी प्राप्त करें!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET जल्द ही आ रहे हैं!
क्या आप कनेक्ट और अर्न करने के लिए तैयार हैं?`,
    buttons: [
      [{ text: "VEX VPN कनेक्ट करें", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "VEX VPN चैनल से जुड़ें", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  id: {
    welcomeText: `
🇮🇩 VEX VPN – pintu gerbang Anda ke internet yang aman dan terbuka.

🔐 Hubungkan ke VEX VPN dan dapatkan 1 $VP untuk setiap megabyte yang terlindungi.
🤝🏻 Ajak teman dan dapatkan 5 GigaPass = 5 GB untuk kalian berdua!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET akan segera hadir!
Siap untuk terhubung dan mendapatkan hadiah?`,
    buttons: [
      [{ text: "Hubungkan VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [
        {
          text: "Bergabung dengan saluran VEX VPN",
          url: CONFIG.VEX_SOCIAL_URL,
        },
      ],
    ],
  },
  ja: {
    welcomeText: `
🇯🇵 VEX VPN – 安全でオープンなインターネットへのゲートウェイ。

🔐 VEX VPNに接続して、保護されたトラフィックの1メガバイトごとに1 $VPを獲得しましょう。
🤝🏻 友達を招待して、二人とも5 GigaPass = 5 GBを受け取りましょう！

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLETがもうすぐ登場します！
接続して報酬を稼ぐ準備はできましたか？`,
    buttons: [
      [{ text: "VEX VPNに接続", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "VEX VPNチャンネルに参加", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  ko: {
    welcomeText: `
🇰🇷 VEX VPN – 안전하고 개방적인 인터넷으로 가는 관문입니다.

🔐 VEX VPN에 연결하고 보호된 트래픽의 1메가바이트당 1 $VP를 적립하세요.
🤝🏻 친구를 초대하고 두 분 모두 5 GigaPass = 5GB를 받으세요!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET가 곧 출시됩니다!
연결하고 보상을 받을 준비가 되셨나요?`,
    buttons: [
      [{ text: "VEX VPN 연결", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "VEX VPN 채널 가입", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  pt: {
    welcomeText: `
🇵🇹 VEX VPN – sua porta de entrada para uma internet segura e aberta. 

🔐 Conecte-se ao VEX VPN e ganhe 1 $VP por cada megabyte protegido.
🤝🏻 Convide amigos e ganhe 5 GigaPass = 5 GB para vocês dois!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET estarão disponíveis em breve!
Pronto para se conectar e ganhar?`,
    buttons: [
      [{ text: "Conectar VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Junte-se ao canal VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  vi: {
    welcomeText: `
🇻🇳 VEX VPN – cổng kết nối của bạn tới internet an toàn và mở.
🔐 Kết nối với VEX VPN và kiếm 1 $VP cho mỗi megabyte lưu lượng được bảo vệ.
🤝🏻 Mời bạn bè và nhận 5 GigaPass = 5 GB cho cả hai bạn!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET sẽ sớm ra mắt!
Sẵn sàng kết nối và kiếm điểm?`,
    buttons: [
      [{ text: "Kết nối VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Tham gia kênh VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  uk: {
    welcomeText: `
🇺🇦 VEX VPN – ваш провідник у безпечний і відкритий інтернет.
🔐 Підключайтеся до VEX VPN і заробляйте 1 $VP за кожен мегабайт захищеного трафіку.
🤝🏻 Запрошуйте друзів і отримуйте 5 GigaPass = 5 ГБ для вас обох!

⚡ VEX HUB / 📧 VEX MAIL / 💼 VEX WALLET скоро будуть доступні!
Готові підключитися і заробляти?`,
    buttons: [
      [{ text: "Підключити VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Приєднатися до каналу VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
};

async function sendTelegramPhoto(
  chatId: number,
  imageUrl: string,
  caption: string,
  buttons: any
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
  const { welcomeText, buttons } = localizations[userLang];

  await sendTelegramPhoto(
    chatId,
    CONFIG.WELCOME_IMAGE_URL,
    welcomeText,
    buttons
  );
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
