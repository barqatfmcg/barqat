/**
 * Barqat Website Configuration
 * Central place for contact details, form submission configuration, and external URLs.
 * Replace placeholder values with verified emails before publishing.
 */
const BARQAT_CONFIG = {
  // Contact details
  contact: {
    email: "info@barqat.com.pk",
    partnerEmail: "partners@barqat.com.pk",
    address: "Hayatabad, Peshawar, Khyber Pakhtunkhwa, Pakistan"
  },

  // Form Submission Configuration:
  // Since GitHub Pages is a static host without a backend:
  // - If endpoint is empty (""), the site gracefully validates, logs the submission,
  //   and presents the success confirmation.
  // - To wire up to a serverless provider (e.g. Web3Forms, Formspree, Formkeep, or Google Apps Script),
  //   simply set endpoint to your service URL below.
  form: {
    endpoint: "",
    method: "POST"
  },

  // App & Download Links
  app: {
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.barqat.app",
    qrImage: "qr.png"
  }
};

if (typeof window !== "undefined") {
  window.BARQAT_CONFIG = BARQAT_CONFIG;
}
