const telegramUrl = 'https://t.me/Nadodelat2';
const youtubeUrl = 'https://youtube.com/channel/UC8PJoADDYiaxqb0UiYBRF9w?si=MLlKE7kNi1kPEvmc';
let theme = localStorage.getItem('tc-theme') || 'dark';
let language = localStorage.getItem('tc-language') || 'ru';
let russianTranslations = {};

const translations = {
  en: {
    loader: 'Connecting to TokenClub API…', navFeatures: 'Features', navModels: 'Models', navPricing: 'Pricing', navSetup: 'Setup',
    getAccess: 'Message us on Telegram ↗', getApiAccess: 'Message us on Telegram ↗', buyOnTelegram: 'Message us on Telegram ↗',
    eyebrow: '● API ACCESS FOR DEVELOPMENT', heroTitle: '1,000,000 tokens<br><span>for your AI projects</span>',
    heroText: 'Connect modern models to Codex App, Cursor, VS Code, bots, and your own applications through a Custom Endpoint.',
    howToConnect: 'How to connect ↓', heroNote: '✓ API key issued • No account sign-in • Setup support',
    statTokens: 'One million tokens', statModels: 'Models available', statSupport: 'Support', statScenarios: 'Your scenarios',
    featuresLabel: '01 / BENEFITS', featuresTitle: 'Everything for a fast start',
    feature1Title: 'Starting balance', feature1Text: 'Tokens are already included in your selected plan.',
    feature2Title: 'Fast setup', feature2Text: 'A key, instructions, and launch in just a few minutes.',
    feature3Title: 'Flexible integration', feature3Text: 'Custom Endpoint for apps and API.',
    feature4Title: 'Support', feature4Text: 'Setup assistance after purchase.',
    modelsLabel: '02 / MODELS', modelsTitle: 'Models for tasks<br>that cannot wait',
    model1: 'Complex tasks and programming', model2: 'General-purpose work', model3: 'Development and refactoring',
    model4: 'Documents and automation', model5: 'Fast integrations',
    compatLabel: '03 / COMPATIBILITY', compatTitle: 'Fits into your familiar<br>workflow',
    endpointNote: 'Works with solutions that support <strong>Custom Endpoint</strong>',
    setupLabel: '04 / SETUP', setupTitle: 'Get connected in a few minutes',
    step1Title: 'Open the guide', step1Text: 'A short setup guide.',
    step2Title: 'Add your API key', step2Text: 'Paste the issued key into your application.',
    step3Title: 'Start working', step3Text: 'Choose a model and launch your project.',
    pricingLabel: '05 / PRICING', pricingTitle: 'Choose the volume<br>for your task', goToPurchase: 'Message us on Telegram ↗', popular: 'POPULAR',
    youtubeGiftLabel: 'FREE FOR SUBSCRIBING ON YOUTUBE', youtubeGiftTitle: 'Account with a balance of <em>1, 2, 4, or 6 million tokens</em>',
    youtubeGiftText: 'Subscribe to the channel and get your account for free.',
    termsStrong: 'Message us on Telegram with the token volume you need: 1, 2, 4, or 6 million.',
    termsText: 'After payment, your account with tokens will be issued through Telegram. A free account is available after subscribing to the YouTube channel.',
    youtubeLink: 'Subscribe on YouTube ↗', docsLabel: '06 / DOCUMENTATION', docsTitle: 'Everything you need to get started',
    documentation: 'Documentation', docText: 'Endpoint setup, API key, and your first request in a clear step-by-step guide.', readDocs: 'Open documentation →',
    agreement: 'User agreement', agreementShort: 'Terms of service, access rules, and the responsibilities of both parties.', readAgreement: 'Read agreement →',
    privacy: 'Privacy policy', privacyShort: 'How we process order data and support requests.', readPrivacy: 'Open policy →',
    finalTitle: 'Your next AI project<br><span>can start working today</span>', finalNote: 'Message us on Telegram with the token volume you need',
    agreementFooter: 'Agreement', privacyFooter: 'Privacy', footerNote: 'To purchase, message us on Telegram with the token volume you need.'
  }
};

function applyTheme() {
  document.body.classList.toggle('light', theme === 'light');
  document.getElementById('themeBtn').textContent = theme === 'dark' ? '☼' : '☾';
  localStorage.setItem('tc-theme', theme);
}

function applyLanguage() {
  const dictionary = language === 'ru' ? russianTranslations : translations.en;
  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18n || element.dataset.i18nHtml;
    const translation = dictionary[key];
    if (!translation) return;

    if (element.hasAttribute('data-i18n-html')) element.innerHTML = translation;
    else element.textContent = translation;
  });

  document.querySelectorAll('.purchase-link, .price-card').forEach((link) => { link.href = telegramUrl; });
  document.querySelectorAll('[data-i18n="youtubeLink"]').forEach((link) => { link.href = youtubeUrl; });

  document.documentElement.lang = language;
  document.getElementById('langBtn').textContent = language === 'ru' ? 'EN' : 'RU';
  document.getElementById('langBtn').setAttribute('aria-label', language === 'ru' ? 'Switch to English' : 'Переключить на русский');
  localStorage.setItem('tc-language', language);
}

document.getElementById('themeBtn').addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme();
});

document.getElementById('langBtn').addEventListener('click', () => {
  language = language === 'ru' ? 'en' : 'ru';
  applyLanguage();
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18n || element.dataset.i18nHtml;
    russianTranslations[key] = element.hasAttribute('data-i18n-html') ? element.innerHTML : element.textContent;
  });
  applyTheme();
  applyLanguage();
  setTimeout(() => document.getElementById('loader').classList.add('done'), 450);
});
