let isScriptLoading = false;
let isScriptLoaded = false;

export const openReservation = () => {
  const triggerClick = () => {
    const btn = document.querySelector(".glf-button");

    if (btn) {
      btn.click();
    } else {
      console.warn("GloriaFood button not found");
    }
  };

  // If already loaded → just trigger
  if (isScriptLoaded) {
    triggerClick();
    return;
  }

  // Prevent multiple script injections
  if (isScriptLoading) return;

  isScriptLoading = true;

  const existingScript = document.getElementById("glf-script");

  if (existingScript) {
    existingScript.onload = () => {
      isScriptLoaded = true;
      triggerClick();
    };
    return;
  }

  const script = document.createElement("script");
  script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
  script.async = true;
  script.defer = true;
  script.id = "glf-script";

  script.onload = () => {
    isScriptLoaded = true;

    // Wait a tiny bit for widget to mount
    setTimeout(triggerClick, 300);
  };

  script.onerror = () => {
    console.error("Failed to load GloriaFood script");
    isScriptLoading = false;
  };

  document.body.appendChild(script);
};