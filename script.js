(() => {
  const config = window.SITE_CONFIG || {};
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
    });
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  const dots = Array.from(document.querySelectorAll('.hero-dot'));
  const heroBackgrounds = Array.from(document.querySelectorAll('[data-hero-background]'));
  if (slides.length) {
    let active = 0;
    let timer;
    const show = (index) => {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const current = i === active;
        slide.classList.toggle('is-active', current);
        slide.setAttribute('aria-hidden', String(!current));
      });
      heroBackgrounds.forEach((background, i) => {
        background.classList.toggle('is-active', i === active);
      });
      dots.forEach((dot, i) => {
        const current = i === active;
        dot.classList.toggle('is-active', current);
        if (current) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    };
    const start = () => { clearInterval(timer); timer = setInterval(() => show(active + 1), 6000); };
    document.getElementById('prevSlide')?.addEventListener('click', () => { show(active - 1); start(); });
    document.getElementById('nextSlide')?.addEventListener('click', () => { show(active + 1); start(); });
    dots.forEach(dot => dot.addEventListener('click', () => { show(Number(dot.dataset.slide)); start(); }));
    const hero = document.querySelector('.hero');
    hero?.addEventListener('mouseenter', () => clearInterval(timer));
    hero?.addEventListener('mouseleave', start);
    hero?.addEventListener('focusin', () => clearInterval(timer));
    hero?.addEventListener('focusout', start);
    show(0); start();
  }

  const setText = (id, value, fallback) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value || fallback;
  };
  setText('phoneText', config.phone, '請補上聯絡電話');
  setText('emailText', config.email, '請補上中心電郵地址');
  setText('addressText', config.address, '請補上中心地址');
  setText('hoursText', config.openingHours, '請補上開放時間');
  const whatsappNumber = String(config.whatsapp || '').replace(/\D/g, '');
  const whatsappMessage = encodeURIComponent('你好，我想查詢課程程度、上課時間及報讀安排。');
  const whatsappUrl = whatsappNumber.length >= 8
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

  const contactWhatsApp = document.getElementById('contactWhatsApp');
  if (contactWhatsApp) {
    contactWhatsApp.href = whatsappUrl;
    contactWhatsApp.target = '_blank';
    contactWhatsApp.rel = 'noopener noreferrer';
    contactWhatsApp.title = whatsappNumber.length >= 8
      ? '透過 WhatsApp 查詢課程'
      : '請在 site-config.js 設定中心 WhatsApp 號碼';
  }

  const wa = document.getElementById('floatingWhatsApp');
  if (wa) {
    wa.href = whatsappUrl;
    wa.title = whatsappNumber.length >= 8
      ? 'WhatsApp 課程查詢'
      : '請在 site-config.js 設定中心 WhatsApp 號碼';
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
