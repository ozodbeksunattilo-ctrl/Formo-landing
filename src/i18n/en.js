/** English — full translation of all site copy. */
export default {
  htmlLang: "en",

  meta: {
    title: "Formo — design your own football kit",
    description:
      "Formo — order custom football kits in Uzbekistan (jersey + shorts) designed by you. Printed in 1–2 days, next-day delivery across Tashkent.",
    ogDescription:
      "Create a custom football kit for yourself, your team or your child — and order it online.",
  },

  lang: {
    name: "English",
    short: "EN",
    label: "Change language",
  },

  skip: "Skip to main content",

  homeAria: "Formo — home",
  navAria: "Main menu",

  nav: [
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Clubs", href: "#clubs" },
    { label: "FAQ", href: "#faq" },
  ],

  menu: {
    open: "Open menu",
    close: "Close menu",
    start: "Get started",
  },

  hero: {
    badge: "Online football kit ordering in Uzbekistan",
    title: "Design your own kit",
    subtitle:
      "Order a custom football kit for yourself, your team or your child — designed exactly the way you want it.",
    primaryCta: "Start designing",
    secondaryCta: "Browse club kits",
    primaryHref: "#builder",
    secondaryHref: "#clubs",
    trust: ["Next-day delivery in Tashkent", "Free exchange for 7 days"],
  },

  intent: {
    eyebrow: "First step",
    title: "What do you need?",
    subtitle: "Pick one option — we'll show you the rest.",
    selected: "Your choice: {v} — the sections below are tailored for you.",
    cards: [
      {
        id: "self",
        title: "A kit for me",
        desc: "Personal style, just for you",
        aria: "Choose a kit for myself",
      },
      {
        id: "team",
        title: "For my team / club",
        desc: "A practical option for 10+ orders",
        aria: "Choose a kit for my team or club",
      },
      {
        id: "kid",
        title: "For my child",
        desc: "Clean design in kids' sizes",
        aria: "Choose a kit for my child",
      },
      {
        id: "club",
        title: "My favourite club",
        desc: "Pick from the club catalogue",
        aria: "Choose my favourite club kit",
      },
    ],
  },

  benefits: {
    eyebrow: "Benefits",
    title: "Why Formo?",
    subtitle: "Four simple reasons people choose us.",
    items: [
      {
        title: "Your own design",
        desc: "Full control of colour, gradient, name, number, font and logo",
      },
      {
        title: "Ready in 1–2 days",
        desc: "Fast production on modern DTF printing",
      },
      {
        title: "We'll find your size",
        desc: "Automatic recommendation by height, weight and age",
      },
      {
        title: "Free exchange for 7 days",
        desc: "If the size doesn't fit, don't worry about it",
      },
    ],
  },

  how: {
    eyebrow: "Process",
    title: "How it works",
    subtitle: "Three steps — and your kit is ready.",
    stepSuffix: " step",
    steps: [
      {
        num: 1,
        title: "Pick a design or a club kit",
        desc: "Create your own in the builder or choose from the club catalogue",
      },
      {
        num: 2,
        title: "Add name, number and colours",
        desc: "Adjust the text, elements and colours to your taste",
      },
      {
        num: 3,
        title: "We print and deliver",
        desc: "Next day across Tashkent, fast delivery to other regions",
      },
    ],
  },

  builder: {
    eyebrow: "App",
    features: [
      "Pick colours and gradients",
      "Add a name and number",
      "Choose the font",
      "Place your logo / crest",
      "Try it on with AR",
      "Create a crest with AI",
    ],
    alt: "Formo football kit — jersey and shorts",
  },

  clubs: {
    eyebrow: "Catalogue",
    title: "Popular clubs",
    subtitle: "Home, away and third kits — you'll see your choice in the app.",
    typesCount: "3 kit types",
    types: ["Home", "Away", "Third"],
    view: "View in app",
    viewAria: "View the {club} kit in the app",
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
    eyebrow: "Pricing",
    popular: "Most popular",
    features: ["Dry-fit polyester", "DTF printing", "Ready in 1–2 days"],
    order: "Order now",
    orderAria: "Order the {item}",
    note: "Name + number print: +30 000 so'm",
    sizeNote: "Kids 2–13 years, adults S–3XL",
    items: [
      { name: "Jersey", price: "99 000 so'm", popular: false },
      { name: "Shorts", price: "60 000 so'm", popular: false },
      { name: "Kit set (jersey + shorts)", price: "189 000 so'm", popular: true },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Questions and answers",
    subtitle: "The four questions we hear most often.",
    items: [
      {
        q: "How long does delivery take?",
        a: "Printing takes 1–2 days. Across Tashkent we deliver the next day. Other regions are served by courier with tracking.",
      },
      {
        q: "What if the size doesn't fit?",
        a: "We recommend a size based on height, weight and age. If it doesn't fit, you can exchange it free of charge within 7 days.",
      },
      {
        q: "Can I cancel my order?",
        a: "You can cancel before printing starts. Once printing is under way, each case is handled individually.",
      },
      {
        q: "How does payment work?",
        a: "We accept cash and card payments. Cash on delivery is also available.",
      },
    ],
  },

  cta: {
    label: "Phone number",
    placeholder: "+998 XX XXX XX XX",
    error: "Please enter your full phone number.",
    hint: "Enter 9 digits. Your data is used only to send the message.",
    success: "Thank you! We'll get in touch shortly.",
    sentVia: "When you press the button, the message will be sent via Telegram to {tg}{extra}.",
    sentViaExtra: " along with your choice",
  },

  footer: {
    tagline: "Order your own football kit with a custom design.",
    links: [
      { label: "Terms of service", href: "#" },
      { label: "Privacy policy", href: "#" },
    ],
    contacts: "Contact",
    telegramAria: "Formo Telegram channel",
    instagramAria: "Formo Instagram page",
    rights: "© {year} Formo. All rights reserved.",
  },

  jersey: {
    variants: ["Teal", "Red", "Blue", "White"],
    show: "Show the {name} colour",
    pick: "Choose the {name} colour",
    alt: "Formo football kit — jersey and shorts, colour: {name}",
    altMockup: "Kit preview in the app, colour: {name}",
    altBack: "Formo football kit — back side, name {name}, number {number}",
    side: { front: "Front", back: "Back" },
    flip: "Flip the kit",
  },

  mockup: {
    ar: "AR",
    colour: "Colour",
    name: "Name",
    number: "Number",
    order: "Order now",
    namePlaceholder: "Name",
    numberPlaceholder: "No.",
    hint: "Name and number are printed on the jersey",
  },

  telegram: {
    hello: "Hello! I'm writing from the Formo app.",
    phone: "My number: +998{phone}",
    chosen: "My choice: {label}",
  },

  intentCopy: {
    default: {
      target: "builder",
      builderTitle: "Builder: your design",
      builderSubtitle:
        "Customise colour, gradient, name, number, font and logo yourself — your kit is ready in minutes.",
      pricingTitle: "Pricing",
      pricingSubtitle: "We hide nothing before payment. Printing cost is listed separately.",
      ctaTitle: "Create your kit now",
      ctaSubtitle: "Enter your phone number and we'll send you the app link.",
      ctaBtn: "Send the link",
    },
    self: {
      target: "builder",
      builderTitle: "A world-class kit for yourself",
      builderSubtitle:
        "Personal design: choose the colour, gradient, name, number and font yourself.",
      pricingTitle: "The kit set suits you best",
      pricingSubtitle: "Jersey + shorts in one order — 189 000 so'm.",
      ctaTitle: "Create your own kit",
      ctaSubtitle: "Leave your number and we'll send the app link instantly.",
      ctaBtn: "Get the app link",
    },
    team: {
      target: "pricing",
      builderTitle: "One design for your whole team",
      builderSubtitle:
        "A single design for the team — each player gets their own name and number printed.",
      pricingTitle: "Ask for a 10+ kit discount",
      pricingSubtitle:
        "Wholesale pricing on bulk orders. Send us quantities and we'll agree a discount in the contract.",
      ctaTitle: "Get a quote for your team",
      ctaSubtitle: "Leave your number and we'll tell you the wholesale price and timeline.",
      ctaBtn: "Request a discount",
    },
    kid: {
      target: "builder",
      builderTitle: "A safe kit for your child",
      builderSubtitle:
        "Soft dry-fit polyester for kids and exact sizes from 2 to 13 years.",
      pricingTitle: "Kids' kit set price",
      pricingSubtitle:
        "Jersey + shorts for kids. We recommend the size by height, weight and age.",
      ctaTitle: "Create a kit for your child",
      ctaSubtitle: "Tell us the age and we'll work out the right size.",
      ctaBtn: "Get the app link",
    },
    club: {
      target: "clubs",
      builderTitle: "Your favourite club kit",
      builderSubtitle:
        "Pick a home, away or third kit from the catalogue and order right away.",
      pricingTitle: "Club kit pricing",
      pricingSubtitle: "The same price for every club kit: set 189 000 so'm.",
      ctaTitle: "Order a club kit",
      ctaSubtitle: "Leave your number and choose the club kit in the app.",
      ctaBtn: "Choose in the app",
    },
  },
}