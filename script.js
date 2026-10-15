const copy = {
  ru: {navAbout:'О компании',navContact:'Контакты',eyebrow:'Сучжоу · Китай',heroTitle:'Соединяем рынки.<br>Открываем новые маршруты.',heroText:'Suzhou JYSeaLand Cross-border E-commerce Co., Ltd. работает в сфере трансграничной электронной коммерции.',writeWhatsApp:'Написать в WhatsApp',sendEmail:'Отправить письмо',aboutTitle:'О компании',aboutText:'Наша специализация — трансграничная электронная коммерция. Мы открыты к деловому диалогу и новым международным возможностям.',contactTitle:'Давайте обсудим сотрудничество',contactText:'Свяжитесь с Денисом удобным для вас способом.',role:'Руководитель',phoneLabel:'Телефон · WeChat · WhatsApp',footer:'Suzhou · Cross-border E-commerce'},
  zh: {navAbout:'关于我们',navContact:'联系方式',eyebrow:'中国 · 苏州',heroTitle:'连接市场，<br>开拓全新航线。',heroText:'苏州嘉蕴山海电子商务有限公司专注于跨境电子商务领域。',writeWhatsApp:'WhatsApp 联系',sendEmail:'发送邮件',aboutTitle:'关于我们',aboutText:'我们专注于跨境电子商务，期待与全球伙伴交流合作，共同探索新的商业机会。',contactTitle:'洽谈合作',contactText:'请通过您方便的方式联系 Денис。',role:'负责人',phoneLabel:'电话 · 微信 · WhatsApp',footer:'苏州 · 跨境电子商务'},
  en: {navAbout:'About',navContact:'Contact',eyebrow:'Suzhou · China',heroTitle:'Connecting markets.<br>Opening new routes.',heroText:'Suzhou JYSeaLand Cross-border E-commerce Co., Ltd. operates in cross-border e-commerce.',writeWhatsApp:'Message on WhatsApp',sendEmail:'Send an email',aboutTitle:'About us',aboutText:'Our focus is cross-border e-commerce. We welcome business conversations and new international opportunities.',contactTitle:'Let’s discuss cooperation',contactText:'Contact Denis using the channel that suits you best.',role:'Manager',phoneLabel:'Phone · WeChat · WhatsApp',footer:'Suzhou · Cross-border E-commerce'}
};
document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>{
  const lang=btn.dataset.lang; document.documentElement.lang=lang==='zh'?'zh-CN':lang;
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b===btn));
  document.querySelectorAll('[data-i18n]').forEach(el=>{const value=copy[lang][el.dataset.i18n];if(value)el.innerHTML=value});
}));

