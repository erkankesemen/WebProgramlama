// script.js

document.addEventListener("DOMContentLoaded", () => {
    const openButton = document.getElementById("openPopup");
    const popup = document.getElementById("popupForm");
    const closeButton = document.getElementById("closePopup");
  
    // Open Popup
    openButton.addEventListener("click", () => {
      popup.classList.remove("hidden");
    });
  
    // Close Popup
    closeButton.addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  
    // Close Popup on Outside Click
    window.addEventListener("click", (event) => {
      if (event.target === popup) {
        popup.classList.add("hidden");
      }
    });
  
    // Form Submission (Optional Placeholder for Backend Integration)
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission
      alert("Form submitted!");
      popup.classList.add("hidden");
      form.reset(); // Clear form inputs
    });
  });
  