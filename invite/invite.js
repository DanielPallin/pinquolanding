(() => {
  const params = new URLSearchParams(window.location.search);

  const quoteId = params.get("quote_id");
  const email = params.get("email");
  const quote = params.get("quote");

  const quoteBox = document.getElementById("quoteBox");
  const quoteText = document.getElementById("quoteText");
  const button = document.getElementById("openAppBtn");

  // Optional quote preview
  if (quote) {
    quoteText.textContent = quote;
    quoteBox.classList.remove("hidden");
  }

  const deepLink =
    `pinquo://invite?quote_id=${encodeURIComponent(quoteId ?? "")}&email=${encodeURIComponent(email ?? "")}`;

  // Replace later with real store links
  const IOS_STORE = "https://apps.apple.com/";
  const ANDROID_STORE = "https://play.google.com/store";

  button.addEventListener("click", () => {
    // Try opening app
    window.location.href = deepLink;

    // Fallback to store
    setTimeout(() => {
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      window.location.href = isIOS ? IOS_STORE : ANDROID_STORE;
    }, 1200);
  });
})();
