(function () {
  const params = new URLSearchParams(window.location.search);
  const quoteId = params.get("quote_id");
  const email = params.get("email");

  if (!quoteId || !email) return;

  const deepLink = `pinquo://invite?quote_id=${quoteId}&email=${encodeURIComponent(email)}`;

  // Try opening app
  window.location.href = deepLink;

  // Fallback after 1.5s
  setTimeout(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes("iphone") || ua.includes("ipad")) {
      window.location.href = "https://apps.apple.com/app/idYOUR_APP_ID";
    } else if (ua.includes("android")) {
      window.location.href = "https://play.google.com/store/apps/details?id=YOUR_PACKAGE";
    }
  }, 1500);
})();
