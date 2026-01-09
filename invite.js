(function () {
  const params = new URLSearchParams(window.location.search);

  // Only run for invite links
  if (params.get("invite") !== "1") return;

  const quoteId = params.get("quote_id");
  const email = params.get("email");

  if (!quoteId) return;

  // ✅ Correct deep link (APP SCHEME, NOT WEBSITE)
  const deepLink =
    `pinquo://invite?quote_id=${quoteId}` +
    (email ? `&email=${encodeURIComponent(email)}` : "");

  // Try opening the app
  window.location.href = deepLink;

  // Fallback to store after 1.5s
  setTimeout(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes("iphone") || ua.includes("ipad")) {
      window.location.href = "https://apps.apple.com/app/idYOUR_APP_ID";
    } else if (ua.includes("android")) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=YOUR_PACKAGE";
    }
  }, 1500);
})();
