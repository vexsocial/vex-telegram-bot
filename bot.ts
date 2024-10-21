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

🔐 Connect to VEX VPN and earn 1 $VP for every megabyte of protected traffic.
🤝🏻 Invite friends and get a bonus of 5 GB free traffic for each friend.

Ready to start using VPN for free?`,
    buttons: [
      [{ text: "Connect VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Join VEX VPN Channel", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  ru: {
    welcomeText: `
🇷🇺 VEX VPN – ваш проводник в безопасный и свободный интернет. 

🔐 Подключайтесь к VEX VPN и зарабатывайте 1 $VP за каждый мегабайт защищённого трафика.
🤝🏻 Приглашайте друзей и получайте бонус — 5 ГБ бесплатного трафика за каждого друга.

Готовы начать пользоваться VPN бесплатно?`,
    buttons: [
      [{ text: "Подключить VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Присоединиться к каналу VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  es: {
    welcomeText: `
🇪🇸 VEX VPN – tu puerta de acceso a un internet seguro y abierto.

🔐 Conéctate a VEX VPN y gana 1 $VP por cada megabyte de tráfico protegido.
🤝🏻 Invita a amigos y obtén un bono de 5 GB de tráfico gratuito por cada amigo.

¿Listo para comenzar a usar VPN gratis?`,
    buttons: [
      [{ text: "Conectar VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Únete al canal de VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  fr: {
    welcomeText: `
🇫🇷 VEX VPN – votre accès à un internet sécurisé et libre.

🔐 Connectez-vous à VEX VPN et gagnez 1 $VP pour chaque mégaoctet de trafic protégé.
🤝🏻 Invitez des amis et obtenez un bonus de 5 Go de trafic gratuit pour chaque ami.

Prêt à commencer à utiliser le VPN gratuitement?`,
    buttons: [
      [{ text: "Connecter VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Rejoindre le canal VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  de: {
    welcomeText: `
🇩🇪 VEX VPN – Ihr Tor zu einem sicheren und freien Internet.

🔐 Verbinden Sie sich mit VEX VPN und verdienen Sie 1 $VP für jedes Megabyte geschützten Datenverkehrs.
🤝🏻 Laden Sie Freunde ein und erhalten Sie einen Bonus von 5 GB kostenlosem Datenverkehr für jeden Freund.

Bereit, das VPN kostenlos zu nutzen?`,
    buttons: [
      [{ text: "VEX VPN verbinden", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Dem VEX VPN Kanal beitreten", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  it: {
    welcomeText: `
🇮🇹 VEX VPN – il tuo accesso a un internet sicuro e aperto.

🔐 Connettiti a VEX VPN e guadagna 1 $VP per ogni megabyte di traffico protetto.
🤝🏻 Invita gli amici e ricevi un bonus di 5 GB di traffico gratuito per ogni amico.

Pronto a iniziare a usare il VPN gratuitamente?`,
    buttons: [
      [{ text: "Connetti VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Unisciti al canale VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  zh: {
    welcomeText: `
🇨🇳 VEX VPN – 进入安全开放互联网的通道。

🔐 连接 VEX VPN，您将获得每兆流量 1 $VP 的奖励。
🤝🏻 邀请朋友，每邀请一位朋友可获得 5 GB 的免费流量奖励。

准备好免费使用 VPN 了吗？`,
    buttons: [
      [{ text: "连接 VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "加入 VEX VPN 频道", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  hi: {
    welcomeText: `
🇮🇳 VEX VPN – आपका सुरक्षित और खुला इंटरनेट में प्रवेश। 
🔐 VEX VPN से कनेक्ट करें और हर मेगाबाइट सुरक्षित ट्रैफ़िक के लिए 1 $VP कमाएं।  
दोस्तों को आमंत्रित करें और प्रत्येक दोस्त के लिए 5 जीबी मुफ्त ट्रैफ़िक बोनस प्राप्त करें।  
क्या आप मुफ्त में VPN का उपयोग शुरू करने के लिए तैयार हैं?`,
    buttons: [
      [{ text: "VEX VPN कनेक्ट करें", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "VEX VPN चैनल से जुड़ें", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  id: {
    welcomeText: `
🇮🇩 VEX VPN – pintu gerbang Anda ke internet yang aman dan terbuka.

🔐 Hubungkan ke VEX VPN dan dapatkan 1 $VP untuk setiap megabyte lalu lintas yang terlindungi.
🤝🏻 Ajak teman dan dapatkan bonus 5 GB lalu lintas gratis untuk setiap teman.

Siap untuk mulai menggunakan VPN secara gratis?`,
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
🤝🏻 友達を招待して、友達ごとに5 GBの無料トラフィックをボーナスとして受け取りましょう。

VPNを無料で使い始める準備はできましたか？`,
    buttons: [
      [{ text: "VEX VPNに接続", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "VEX VPNチャンネルに参加", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  ko: {
    welcomeText: `
🇰🇷 VEX VPN – 안전하고 개방적인 인터넷으로 가는 관문입니다.

🔐 VEX VPN에 연결하고 보호된 트래픽의 1메가바이트당 1 $VP를 적립하세요.
🤝🏻 친구를 초대하고 친구 한 명당 5GB의 무료 트래픽 보너스를 받으세요.

무료로 VPN을 사용하기 시작할 준비가 되셨나요?`,
    buttons: [
      [{ text: "VEX VPN 연결", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "VEX VPN 채널 가입", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  pt: {
    welcomeText: `
🇵🇹 VEX VPN – sua porta de entrada para uma internet segura e aberta. 

🔐 Conecte-se ao VEX VPN e ganhe 1 $VP por cada megabyte de tráfego protegido.
🤝🏻 Convide amigos e ganhe um bônus de 5 GB de tráfego gratuito para cada amigo.

Pronto para começar a usar VPN gratuitamente?`,
    buttons: [
      [{ text: "Conectar VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Junte-se ao canal VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  vi: {
    welcomeText: `
🇻🇳 VEX VPN – cổng kết nối của bạn tới internet an toàn và mở.
🔐 Kết nối với VEX VPN và kiếm 1 $VP cho mỗi megabyte lưu lượng được bảo vệ.
🤝🏻 Mời bạn bè và nhận phần thưởng là 5 GB lưu lượng miễn phí cho mỗi người bạn.

Sẵn sàng sử dụng VPN miễn phí chưa?`,
    buttons: [
      [{ text: "Kết nối VEX VPN", web_app: { url: CONFIG.VEX_APP_URL } }],
      [{ text: "Tham gia kênh VEX VPN", url: CONFIG.VEX_SOCIAL_URL }],
    ],
  },
  uk: {
    welcomeText: `
🇺🇦 VEX VPN – ваш провідник у безпечний і відкритий інтернет.
🔐 Підключайтеся до VEX VPN і заробляйте 1 $VP за кожен мегабайт захищеного трафіку.
🤝🏻 Запрошуйте друзів і отримуйте бонус — 5 ГБ безкоштовного трафіку за кожного друга.

Готові почати користуватися VPN безкоштовно?`,
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
