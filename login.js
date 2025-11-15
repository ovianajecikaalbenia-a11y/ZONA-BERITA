// login.js

function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validUsername = "Tesalonika";
  const validPassword = "TU23";

  if (username === validUsername && password === validPassword) {
    alert("Login berhasil! Selamat datang, " + username + "!");
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah. Silakan coba lagi.");
  }
}