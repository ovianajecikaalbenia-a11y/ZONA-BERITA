// main.js

document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.style.opacity = 0;
    mainContent.style.transition = "opacity 1s ease";
    setTimeout(() => {
      mainContent.style.opacity = 1;
    }, 100);
  }
  console.log("Website Zona Berita siap digunakan 🇮🇩");
});

function logoutUser() {
  const confirmLogout = confirm("Yakin ingin keluar?");
  if (confirmLogout) {
    alert("Anda telah logout. Terima kasih sudah mengunjungi Zona Berita!");
    window.location.href = "login.html";
  }
}