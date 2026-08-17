// script.js
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }
  alert("Form submitted successfully!");
});
