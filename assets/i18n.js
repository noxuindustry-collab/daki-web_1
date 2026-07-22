/* Daki i18n — jeden sdílený slovník + přepínač CZ/EN pro obě stránky.
   Čeština = originál v HTML (fallback vždy). EN texty jsou DRAFT k revizi.
   Persistence: ?lang=en v URL (primární) + localStorage (paměť). */
(function () {
  var EN = {
    "skip": "Skip to content",
    "nav.about": "About us",
    "nav.menu": "Menu",
    "nav.contact": "Contact",
    "nav.ctamenu": "MENU",
    "hero.kicker": "Family-run Vietnamese bistro · Karviná",
    "hero.title": "Authentic Asian<br>cuisine",
    "hero.m1": "Family-run, authentic, Asian, family-run, authentic, Asian, ",
    "hero.m3": "Asian, family-run, authentic, Asian, family-run, authentic, ",
    "hero.cta1": "View the menu",
    "hero.cta2": "Order on Foodora",
    "onas.title": "A little bit<br>about Daki",
    "onas.body": "<strong style=\"color:#f0ce7a\">DAKI</strong> is a family bistro. Our parents Hanh and Vinh spent their whole lives selling clothes — but their hearts always belonged to the kitchen. Cooking for their children was their way of saying “I love you” after a long day — and of bringing a piece of home from Vietnam a little closer. After years they fulfilled their dream and opened a place where they cook just like they cooked for their kids: with love, patience and years of experience in every dish. And today they cook the same way for you.",
    "akce.title": "Lunch special",
    "akce.sub": "From <strong>10 am – 2 pm</strong> you get a free soup with selected dishes.",
    "akce.d1": "Fried noodles with chicken",
    "akce.d2": "Fried rice with chicken",
    "akce.d3": "Pork in sweet and sour sauce",
    "akce.d4": "Fried rice noodles with chicken",
    "akce.cta": "See the full menu",
    "kontakt.title": "Where to find us",
    "kontakt.nav": "Open in Google Maps",
    "kontakt.hours1": "<strong>Mon–Fri</strong><br>10:00 – 18:00",
    "kontakt.hours2": "<strong>Sun</strong><br>11:00 – 19:00",
    "cta.title": "Hungry?<br><span style=\"color: #FFCB5F\">Come taste</span><br>our food!",
    "cta.btn": "Contact",
    "ig.title": "Follow our story on <a href=\"https://www.instagram.com/daki.food/\" style=\"color:#a5523a;text-decoration:none\">Instagram</a>",
    "footer.tag": "Authentic Vietnamese cuisine in the heart of Karviná.<br>Family recipe, modern presentation.",
    "footer.hours": "Mon–Fri: 10:00 – 18:00 <br>Sun: 11:00 – 19:00",
    "footer.privacy": "Privacy policy",
    "footer.cookies": "Cookies",
    "menu.title": "Our menu",
    "cat.starters": "Starters",
    "cat.pho": "Pho soups",
    "cat.mains": "Main dishes",
    "meat.chicken": "chicken",
    "meat.beef": "beef",
    "meat.prawns": "prawns",
    "meat.pork": "pork",
    "e404.m1": "Oops, oops, oops, oops, oops, oops, oops, oops, ",
    "e404.m2": "Nothing here, nothing here, nothing here, nothing here, ",
    "e404.title": "This page ran away from our kitchen",
    "e404.body": "Maybe it's hiding under the noodles, maybe the duck ate it. Don't worry — the best of Daki is still here.",
    "e404.home": "Back home",
    "e404.menu": "Browse the menu",
    "ck.title": "Cookies? We'd rather serve spring rolls.",
    "ck.body": "We use cookies so the site works and we know what you like. Details in our <a href=\"Daki Cookies.dc.html\" style=\"color:#fef7e5;font-weight:700\">cookie policy</a>.",
    "ck.necessary": "Essential only",
    "ck.all": "Accept all",
    "ckp.kicker": "Legal information",
    "ckp.title": "Cookie policy",
    "ckp.updated": "Last updated: 22 July 2026",
    "ckp.h1": "What are cookies?",
    "ckp.p1": "Cookies are small text files your browser stores when you visit a website. They help us remember your choices (like language) and understand how you use the site so we can improve it. They're not spring rolls — we make those better.",
    "ckp.h2": "Which cookies do we use?",
    "ckp.t1h": "Essential cookies",
    "ckp.t1b": "They keep the site working — remembering your language (CZ/EN) and your cookie choice. The site doesn't work properly without them, so they can't be turned off.",
    "ckp.t2h": "Analytics cookies",
    "ckp.t2b": "They help us understand anonymously which pages and dishes interest you most. We only store them with your consent (“Accept all”).",
    "ckp.t3h": "Third-party cookies",
    "ckp.t3b": "Links to Foodora, Google Maps and Instagram may set those services' own cookies after you click. They follow their policies, not ours.",
    "ckp.h3": "How to change your consent?",
    "ckp.p3": "You can change your choice anytime — either by deleting cookies in your browser, or with the button below, which reopens the settings.",
    "ckp.reset": "Change cookie settings",
    "ckp.h4": "Who manages the cookies?",
    "ckp.p4": "The controller is <strong>DAKI BISTRO</strong>, Fryštátská 151/15, Fryštát, 733 01 Karviná 1. For questions about cookies and personal data, ask us in person at the bistro or via <a href=\"https://www.instagram.com/daki.food/\">Instagram @daki.food</a>.",
    "ckp.back": "Back to the main page",
    "pp.title": "Privacy policy",
    "pp.updated": "Last updated: 22 July 2026",
    "pp.h1": "Who we are",
    "pp.p1": "The controller of your personal data is <strong>Noxu Industry s.r.o.</strong>, Fryštátská 151/15, Fryštát, 733 01 Karviná 1.",
    "pp.h2": "What data we process",
    "pp.t1h": "Visiting the website",
    "pp.t1b": "The site itself collects no personal data. We only store technical settings (language, cookie choice) — more in our <a href=\"Daki Cookies.dc.html\">cookie policy</a>.",
    "pp.t2h": "Orders via Foodora",
    "pp.t2b": "If you order through Foodora, your data (name, address, phone) is processed by Foodora under its own policy. We only see what we need to prepare and hand over your order.",
    "pp.t3h": "Communicating with us",
    "pp.t3b": "If you message us on Instagram, we process your message only to answer it. We never share it or use it for marketing.",
    "pp.h3": "Who we share data with",
    "pp.p3": "We never sell your data or share it for marketing. Third parties (Foodora, Google Maps, Instagram) process data under their own policies once you click through to their service.",
    "pp.h4": "Your rights",
    "pp.p4": "Under GDPR you have the right to access, correct or erase your data, restrict processing, and lodge a complaint with the Czech Data Protection Authority (<a href=\"https://uoou.gov.cz\">uoou.gov.cz</a>).",
    "pp.h5": "Contact",
    "pp.p5": "For questions about personal data, ask us in person at the bistro (Fryštátská 151/15, Karviná) or by email at <a href=\"mailto:noxu.industry@gmail.com\">noxu.industry@gmail.com</a>."
    /* Názvy a popisy jídel: až budou v tabulce sloupce nazev_jidla_en / popis_en,
       přidají se sem klíče dish.* — do té doby padají na český originál. */
  };

  function currentLang() {
    var q = new URLSearchParams(location.search).get('lang');    if (q === 'en' || q === 'cs') return q;
    try { var s = localStorage.getItem('daki-lang'); if (s === 'en' || s === 'cs') return s; } catch (e) {}
    return 'cs';
  }

  function addLang(href, lang) {
    var parts = href.split('#');
    var base = parts[0];
    var hash = parts.length > 1 ? '#' + parts.slice(1).join('#') : '';
    base = base.replace(/([?&])lang=[^&#]*&?/, function (m, p) { return m.slice(-1) === '&' ? p : ''; }).replace(/[?&]$/, '');
    if (lang !== 'cs') base += (base.indexOf('?') > -1 ? '&' : '?') + 'lang=' + lang;
    return base + hash;
  }

  var applyHookLang = null; // poslední jazyk předaný hooku dakiOnLang

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.getAttribute('data-i18n-orig') === null) el.setAttribute('data-i18n-orig', el.innerHTML);
      // guard proti nekonečné smyčce: přepis hrefů (?lang=en) uvnitř přeloženého HTML by jinak
      // způsobil, že innerHTML nikdy nesedí se slovníkem → apply přes MutationObserver donekonečna
      if (el.getAttribute('data-i18n-applied') === lang) return;
      var orig = el.getAttribute('data-i18n-orig');
      var t = (lang === 'en' && EN[key]) ? EN[key] : orig; // fallback = český originál, nikdy prázdno
      if (t.indexOf('<') > -1 || orig.indexOf('<') > -1) { if (el.innerHTML !== t) el.innerHTML = t; }
      else if (el.textContent !== t) el.textContent = t;
      el.setAttribute('data-i18n-applied', lang);
    });
    document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      var on = b.getAttribute('data-lang-btn') === lang;
      b.style.background = on ? '#873924' : 'transparent';
      b.style.color = on ? '#fef7e5' : '#873924';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (h && h.indexOf('.dc.html') > -1) a.setAttribute('href', addLang(h, lang));
    });
    try { localStorage.setItem('daki-lang', lang); } catch (e) {}
    // hook pro dynamický obsah (karty nabídky, otevřený detail) — jen při SKUTEČNÉ změně jazyka,
    // nikdy z každého ticku MutationObserveru (jinak nekonečná smyčka apply() při streamovaném renderu)
    if (window.dakiOnLang && lang !== applyHookLang) {
      applyHookLang = lang;
      try { window.dakiOnLang(lang); } catch (e) {}
    }
    try {
      var u = new URL(location.href);
      if (lang === 'cs') u.searchParams.delete('lang'); else u.searchParams.set('lang', lang);
      history.replaceState(null, '', u);
    } catch (e) {}
  }

  window.dakiSetLang = apply;
  window.dakiApplyLang = function () { apply(currentLang()); };

  document.addEventListener('click', function (e) {
    var t = e.target;
    var b = t.closest && t.closest('[data-lang-btn]');
    if (b) { apply(b.getAttribute('data-lang-btn')); return; }
    var a = t.closest && t.closest('a[href]');
    if (a) {
      var h = a.getAttribute('href');
      if (h && h.indexOf('.dc.html') > -1) a.setAttribute('href', addLang(h, document.documentElement.lang === 'en' ? 'en' : 'cs'));
    }
  }, true);

  // Init s ohledem na pozdní render: zkoušej, dokud se [data-i18n] neobjeví, pak hlídej krátce mutace
  function init() {
    window.dakiApplyLang();
    if (document.querySelectorAll('[data-i18n]').length > 0) {
      var mo = new MutationObserver(function () { window.dakiApplyLang(); });
      mo.observe(document.body, { childList: true, subtree: true });
      setTimeout(function () { mo.disconnect(); window.dakiApplyLang(); }, 3000);
      return;
    }
    setTimeout(init, 150);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else setTimeout(init, 0);
  window.addEventListener('load', function () { window.dakiApplyLang(); });
})();
