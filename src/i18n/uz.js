/**
 * O'zbekcha (asosiy til) — barcha matnlar shu faylda.
 * Har bir kalit boshqa tillarga (ru, en) parallel ravishda takrorlanadi.
 */
export default {
  htmlLang: "uz",

  meta: {
    title: "Formo — O'z futbol formangni dizayn qilib buyurtma ber",
    description:
      "Formo — O'zbekistonda futbol formangizni (futbolka + shortik) onlayn dizayn qilib, tez va qulay buyurtma bering. Bosma 1–2 kunda, Toshkent bo'ylab ertasi kuni yetkazib beriladi.",
    ogDescription:
      "Noyob futbol formangizni o'zingiz yaratib, jamoangiz, farzandingiz yoki o'zingiz uchun buyurtma qiling.",
  },

  lang: {
    name: "O'zbekcha",
    short: "UZ",
    label: "Tilni o'zgartirish",
  },

  skip: "Asosiy kontentga o'tish",

  homeAria: "Formo — bosh sahifa",
  navAria: "Asosiy menyu",

  nav: [
    { label: "Qanday ishlaydi", href: "#how" },
    { label: "Narxlar", href: "#pricing" },
    { label: "Klublar", href: "#clubs" },
    { label: "Savollar", href: "#faq" },
  ],

  menu: {
    open: "Menyuni ochish",
    close: "Menyuni yopish",
    start: "Boshlash",
  },

  hero: {
    badge: "O'zbekistonda onlayn futbol forma buyurtkasi",
    title: "O'z formangni yarat",
    subtitle:
      "O'zingiz uchun, jamoangiz uchun yoki farzandingiz uchun noyob futbol formasini dizayn qilib buyurtma bering.",
    primaryCta: "Dizayn qilishni boshlash",
    secondaryCta: "Klub formalarini ko'rish",
    primaryHref: "#builder",
    secondaryHref: "#clubs",
    trust: ["Toshkent bo'ylab ertasi kuni", "7 kun bepul almashtirish"],
  },

  intent: {
    eyebrow: "Birinchi qadam",
    title: "Sizga nima kerak?",
    subtitle: "Bitta tanlov qiling — qolganini biz sizga ko'rsatamiz.",
    selected: "Tanlovingiz: {v} — quyidagi bo'limlar sizga moslashtirildi.",
    cards: [
      {
        id: "self",
        title: "O'zim uchun forma",
        desc: "Shaxsiy uslubda, faqat o'zingiz uchun",
        aria: "O'zim uchun forma tanlash",
      },
      {
        id: "team",
        title: "Jamoam / klubim uchun",
        desc: "10+ buyurtma uchun qulay yechim",
        aria: "Jamoam yoki klubim uchun forma tanlash",
      },
      {
        id: "kid",
        title: "Farzandim uchun",
        desc: "Bolalar o'lchamida toza dizayn",
        aria: "Farzandim uchun forma tanlash",
      },
      {
        id: "club",
        title: "Sevimli klub formasi",
        desc: "Mavjud klub katalogidan tanlang",
        aria: "Sevimli klub formasi tanlash",
      },
    ],
  },

  benefits: {
    eyebrow: "Afzalliklar",
    title: "Nima uchun Formo?",
    subtitle: "To'rtta oddiy sabab — shuning uchun bizni tanishadi.",
    items: [
      {
        title: "O'z dizayning",
        desc: "Rang, gradient, ism, raqam, shrift va logo bilan to'liq sozlash",
      },
      {
        title: "1–2 kunda tayyor",
        desc: "Zamonaviy DTF bosma bilan tezkor ishlab chiqarish",
      },
      {
        title: "O'lchamni biz topamiz",
        desc: "Bo'y/vazn/yosh asosida avtomatik tavsiya",
      },
      {
        title: "7 kun bepul almashtirish",
        desc: "O'lcham mos kelmasa, tashvishlanmang",
      },
    ],
  },

  how: {
    eyebrow: "Jarayon",
    title: "Qanday ishlaydi",
    subtitle: "Uch qadam — va forma tayyor.",
    stepSuffix: "-qadam",
    steps: [
      {
        num: 1,
        title: "Dizayn yoki klub formasini tanlang",
        desc: "Konstruktor orqali yaratish yoki mashhur klublar katalogidan tanlash",
      },
      {
        num: 2,
        title: "Ism, raqam, rang qo'shing",
        desc: "Kerakli matn, elementlar va ranglarni moslashtiring",
      },
      {
        num: 3,
        title: "Biz bosamiz va yetkazamiz",
        desc: "Toshkent bo'ylab ertasi kuni, boshqa hududlarga tezkor yetkazish",
      },
    ],
  },

  builder: {
    eyebrow: "Ilova",
    features: [
      "Rang va gradient tanlash",
      "Ism va raqam qo'shish",
      "Shrift tanlash",
      "Logo / gerb joylashtirish",
      "AR orqali kiyib ko'rish",
      "AI bilan gerb yaratish",
    ],
    alt: "Formo futbol formasi — futbolka va shortik",
  },

  clubs: {
    eyebrow: "Katalog",
    title: "Mashhur klublar",
    subtitle: "Uy, mehmon va uchinchi forma — tanlagan variantni ilovada ko'rasiz.",
    typesCount: "3 ta forma turi",
    types: ["Uy", "Mehmon", "3-forma"],
    view: "Ilovada ko'rish",
    viewAria: "{club} formasini ilovada ko'rish",
    list: [
      { name: "Real Madrid", initials: "RM" },
      { name: "Barcelona", initials: "FCB" },
      { name: "Man United", initials: "MU" },
      { name: "Bayern Munich", initials: "FCB" },
      { name: "Milan", initials: "ACM" },
      { name: "PSG", initials: "PSG" },
    ],
  },

  pricing: {
    eyebrow: "Narxlar",
    popular: "Eng ommabop",
    features: ["Dry-fit polyester", "DTF bosma", "1–2 kunda tayyor"],
    order: "Buyurtma berish",
    orderAria: "{item} buyurtma berish",
    note: "Ism+raqam bosmasi: +30 000 so'm",
    sizeNote: "Bolalar 2–13 yosh, kattalar S–3XL",
    items: [
      { name: "Futbolka", price: "99 000 so'm", popular: false },
      { name: "Shortik", price: "60 000 so'm", popular: false },
      { name: "To'plam (futbolka + shortik)", price: "189 000 so'm", popular: true },
    ],
  },

  faq: {
    eyebrow: "Savollar",
    title: "Savol-javob",
    subtitle: "Eng ko'p so'raladigan to'rt savol.",
    items: [
      {
        q: "Qancha vaqtda yetkaziladi?",
        a: "Bosma 1–2 kunda tayyorlanadi. Toshkent bo'ylab ertasi kuni yetkazib beriladi. Boshqa hududlarda kuryer kuzatuvi orqali yetkaziladi.",
      },
      {
        q: "O'lcham mos kelmasa-chi?",
        a: "Bo'y/vazn/yoshga qarab avtomatik o'lcham tavsiyasi beramiz. Agar o'lcham mos kelmasa, 7 kun ichida bepul almashtirish imkoniyati mavjud.",
      },
      {
        q: "Buyurtmani bekor qilsa bo'ladimi?",
        a: "Buyurtma bosilishidan oldin bekor qilish mumkin. Bosma jarayoni boshlanganidan so'ng bekor qilish holati alohida ko'rib chiqiladi.",
      },
      {
        q: "Naqd to'lov qanday ishlaydi?",
        a: "Naqd va karta orqali to'lov qabul qilinadi. Yetkazib berishda naqd to'lov imkoniyati mavjud.",
      },
    ],
  },

  cta: {
    label: "Telefon raqam",
    placeholder: "+998 XX XXX XX XX",
    error: "Iltimos, telefon raqamni to'liq kiriting.",
    hint: "9 ta raqam kiriting. Ma'lumotlar faqat yuborish uchun ishlatiladi.",
    success: "Rahmat! Tez orada siz bilan bog'lanamiz.",
    sentVia: "Tugmani bosganingizda Telegram orqali {tg} orqali yuboriladi{extra}.",
    sentViaExtra: " va tanlovingiz qo'shiladi",
  },

  footer: {
    tagline: "O'z futbol formangni dizayn qilib buyurtma ber.",
    links: [
      { label: "Oferta", href: "#" },
      { label: "Maxfiylik siyosati", href: "#" },
    ],
    contacts: "Aloqa",
    telegramAria: "Formo Telegram kanali",
    instagramAria: "Formo Instagram sahifasi",
    rights: "© {year} Formo. Barcha huquqlar himoyalangan.",
  },

  jersey: {
    variants: ["Firuza", "Qizil", "Ko'k", "Oq"],
    show: "{name} rangni ko'rsatish",
    pick: "{name} rangni tanlash",
    alt: "Formo futbol formasi — futbolka va shortik, rang: {name}",
    altMockup: "Ilovadagi forma namunasi, rang: {name}",
    altBack: "Formo futbol formasi — orqa tomon, ism {name}, raqam {number}",
    side: { front: "Old", back: "Orqa" },
    flip: "Formani aylantirish",
  },

  mockup: {
    ar: "AR",
    colour: "Rang",
    name: "Ism",
    number: "Raqam",
    order: "Buyurtma berish",
    namePlaceholder: "Ism",
    numberPlaceholder: "№",
    hint: "Ism va raqam futbolkaga yoziladi",
  },

  telegram: {
    hello: "Salom! Formo ilovasidan yozaman.",
    phone: "Telefon raqamim: +998{phone}",
    chosen: "Mening tanlagan variantim: {label}",
  },

  /**
   * "Sizga nima kerak?" tanloviga qarab keyingi bo'limlarning
   * sarlavha va CTA matnlari o'zgaradi.
   */
  intentCopy: {
    default: {
      target: "builder",
      builderTitle: "Konstruktor: dizayn sizniki",
      builderSubtitle:
        "Rang, gradient, ism, raqam, shrift va logoni o'zingiz sozlang — bir necha daqiqada tayyor forma.",
      pricingTitle: "Narxlar",
      pricingSubtitle: "To'lov oldidan hech narsa yashirmaymiz. Bosma narxi alohida ko'rsatilgan.",
      ctaTitle: "Formangni hozir yarat",
      ctaSubtitle: "Telefon raqamingizni yozing, biz ilovaning havolasini yuboramiz.",
      ctaBtn: "Havola yuborish",
    },
    self: {
      target: "builder",
      builderTitle: "O'zingiz uchun xalqaro darajasidagi forma",
      builderSubtitle:
        "Shaxsiy uslubda dizayn: rang, gradient, ism, raqam va shriftni o'zingiz tanlang.",
      pricingTitle: "Siz uchun to'plam eng qulay",
      pricingSubtitle: "Futbolka + shortik bir martada — 189 000 so'm.",
      ctaTitle: "O'z formangizni yarating",
      ctaSubtitle: "Telefoningizni yozing, ilova havolasini darhol yuboramiz.",
      ctaBtn: "Ilova havolasini olish",
    },
    team: {
      target: "pricing",
      builderTitle: "Jamoangiz uchun yagona dizayn",
      builderSubtitle:
        "Jamoa uchun bitta dizayn — har bir o'yinchi uchun alohida ism va raqam bosiladi.",
      pricingTitle: "10+ forma uchun chegirma so'rang",
      pricingSubtitle:
        "Katta buyurtmalar uchun ulgurji narx. Miqdor yozilsa, chegirkamiz shartnoma bilan.",
      ctaTitle: "Jamoangiz uchun taklif oling",
      ctaSubtitle: "Raqamingizni yozing — ulgurji narx va muddatni aytib beramiz.",
      ctaBtn: "Chegirma so'rash",
    },
    kid: {
      target: "builder",
      builderTitle: "Farzandingiz uchun xavfsiz forma",
      builderSubtitle:
        "Bolalar uchun yumshoq dry-fit polyester va 2–13 yosh oralig'ida aniq o'lcham.",
      pricingTitle: "Bolalar formasi to'plam narxi",
      pricingSubtitle:
        "Bolalar uchun futbolka + shortik. O'lcham bo'y, vazn va yoshga qarab tavsiya qilinadi.",
      ctaTitle: "Farzandingiz uchun forma yarating",
      ctaSubtitle: "Yoshini yozing — kerakli o'lchamni biz to'rtalamiz.",
      ctaBtn: "Ilova havolasini olish",
    },
    club: {
      target: "clubs",
      builderTitle: "Sevimli klubingiz formasi",
      builderSubtitle:
        "Uy, mehmon va uchinchi formalar katalogdan tanlang — darhol buyurtma bering.",
      pricingTitle: "Klub formalari narxi",
      pricingSubtitle: "Barcha klub formalari uchun bir xil narx: to'plam 189 000 so'm.",
      ctaTitle: "Klub formasini buyurtma bering",
      ctaSubtitle: "Raqamingizni yozing, kerakli klub formasini ilovada tanlang.",
      ctaBtn: "Ilovada tanlash",
    },
  },
}