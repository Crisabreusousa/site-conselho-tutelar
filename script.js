// Apenas uma interação simples com botão
console.log("Site do Conselho Tutelar carregado.");
// Função para mostrar mais informações
function mostrarMais() {
    var info = document.getElementById("mais-info");
    info.classList.toggle("show"); // Alterna entre esconder e mostrar
  }
 
  const btn = document.getElementById("btnContato");
  const info = document.getElementById("infoContato");

  btn.addEventListener("click", () => {
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  });
  function mostrarContato() {
    const info = document.getElementById("info-contato");
    info.style.display = info.style.display === "block" ? "none" : "block";
  }
  
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');

  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });
  // Adiciona um evento de clique ao botão "menu-toggle"
  menuToggle.addEventListener('click', () => {
    // Alterna a classe "active" na lista de menus
    menuList.classList.toggle('active');
  });
