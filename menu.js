// Selecionando o ícone do menu e a lista do menu
const menuIcon = document.querySelector(".icones li a img"); // O ícone de menu
const menu = document.querySelector(".menu"); // O menu que vai aparecer

// Função para alternar o menu
function toggleMenu() {
    if (window.innerWidth <= 480) {  // Verifica se a largura da tela é 480px ou menor
        menu.classList.toggle("show"); // Alterna a classe 'show' para mostrar/ocultar o menu
    }
}

// Adiciona evento de clique no ícone de menu
menuIcon.addEventListener("click", toggleMenu);

// Fecha o menu e faz o redirecionamento ao clicar em um item
const menuItems = document.querySelectorAll(".menu ul li a");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("show"); // Fecha o menu ao clicar no item
    });
});

// Adiciona evento para verificar mudança de tamanho da janela
window.addEventListener("resize", () => {
    if (window.innerWidth > 480) {  // Se a largura for maior que 480px, o menu estará sempre visível
        menu.classList.remove("show"); // Garantir que o menu está fechado em telas grandes
    }
});
