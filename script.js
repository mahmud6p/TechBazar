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


const products = [
  "Cyber Security Toolkit",
  "Ethical Hacking Guide",
  "OSINT Resources",
  "PenTest Lab Setup"
];

const list = document.getElementById("productList");
products.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    setTimeout(() => el.classList.add("show"), 500);
  });
});
