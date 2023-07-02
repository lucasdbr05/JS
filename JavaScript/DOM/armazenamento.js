// Session Storage: salva informações no dispositivo servidor enquanto se navega em um site, mesmo se atualizà-lo(mas caso fechar a aba, a informação é perdida)
document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});
document.getElementById("readSession").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é " + info);
});

//Local Storage:salva informações no dispositivo servidor enquanto se navega em um site, e mesmo se atualizà-lo ou fechar sua aba a informação permanecerá salva
document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});
document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("text");
  alert("A informação salva é " + t);
});

// Cookies: guarda dados de armazenamento em pequenos arquivos no computador do cliente
document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 4, 1) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 3, 2) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
