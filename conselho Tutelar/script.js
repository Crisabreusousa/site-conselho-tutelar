// Exibe no console quando o site carrega
console.log("Site do Conselho Tutelar carregado.");

// Função para mostrar informações adicionais (se houver uso do id "mais-info")
function mostrarMais() {
  const info = document.getElementById("mais-info");
  if (info) {
    info.classList.toggle("show");
  }
}

// Mostrar/ocultar informações de contato
function mostrarContato() {
  const info = document.getElementById("info-contato");
  if (info) {
    info.style.display = (info.style.display === "block") ? "none" : "block";
  }
}

// Menu hambúrguer (versão mobile)
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

if (menuToggle && menuList) {
  menuToggle.addEventListener('click', () => {
    // Alterna a visibilidade do menu
    if (menuList.style.display === 'flex') {
      menuList.style.display = 'none';
    } else {
      menuList.style.display = 'flex';
    }
  });
}
