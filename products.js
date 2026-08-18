// products.js
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
