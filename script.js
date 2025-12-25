const API = "https://asiandramas.fwh.is/";

fetch(`${API}/dramas.php`)
  .then(r => r.json())
  .then(data => {
    const main = document.getElementById("dramas");
    data.forEach(d => {
      main.innerHTML += `
        <div class="card">
          <img src="${d.cover}">
          <h3>${d.title}</h3>
        </div>`;
    });
  });

function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function login() {
  fetch(`${API}/login.php`, {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(r => r.json())
  .then(d => alert("Bem-vindo " + d.users))
  .catch(() => alert("Erro de login"));
}


