/* Daki Bistro — sdílená správa cookie souhlasu + podmíněné načtení Google Analytics 4.
   Zahrnuto na KAŽDÉ stránce (index.html, nabidka.html, cookies.html, soukromi.html, 404.html).
   Analytics se načte JEN pokud návštěvník klikne "Přijmout vše" (data-ck="all"),
   nebo pokud tuto volbu už dřív uložil (localStorage klíč "daki-cookies"). */
(function () {
  // TODO: nahraď svým Measurement ID z https://analytics.google.com (Admin → Datové streamy → Web)
  var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  function getConsent() {
    try { return localStorage.getItem('daki-cookies'); } catch (e) { return null; }
  }

  function setConsent(value) {
    try { localStorage.setItem('daki-cookies', value); } catch (e) {}
  }

  function loadAnalytics() {
    if (window.__dakiGaLoaded) return;
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.indexOf('XXXX') !== -1) {
      console.warn('Daki consent: GA_MEASUREMENT_ID není nastavené v assets/consent.js — analytics se nenačte.');
      return;
    }
    window.__dakiGaLoaded = true;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    // anonymize_ip: doporučené nastavení pro soulad s GDPR
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  // Pokud souhlas se vším byl uložen dřív (na jakékoli stránce), načti analytics hned při načtení stránky.
  if (getConsent() === 'all') loadAnalytics();

  // Veřejné API pro cookie lištu (viz index.html _setupCookieBar) i pro budoucí použití na dalších stránkách.
  window.dakiConsent = {
    get: getConsent,
    set: setConsent,
    loadAnalytics: loadAnalytics
  };
})();
