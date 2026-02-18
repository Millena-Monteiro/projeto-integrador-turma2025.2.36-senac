export function renderHeader() {
  return `
    <header class="header">
      <img id="main-logo" src="/assets/img/renovaciclo-logo-sem-fundo.png" alt="Logo">

      <nav id="nav-menu">
        <a href="/index.html">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="/servicos.html">Serviços</a>
        <a href="consultoria.html">AGENDAR CONSULTORIA</a>
      </nav>

      <button id="hamburger">☰</button>
    </header>
  `;
}

export function setupMenu() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("nav-menu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}
