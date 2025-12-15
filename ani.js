// Cronômetro desde 13 de outubro de 2024
function atualizarCronometro() {
  const dataInicio = new Date('2024-10-13T00:00:00');
  const agora = new Date();
  const diffMs = agora - dataInicio;

  const segundosTotais = Math.floor(diffMs / 1000);
  const dias = Math.floor(segundosTotais / 86400);
  const horas = Math.floor((segundosTotais % 86400) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById('cronometro').textContent =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos desde 13 de outubro de 2024`;
}

setInterval(atualizarCronometro, 1000);
atualizarCronometro();


const slides = document.getElementById('slides');
const imagens = slides.children;
const totalSlides = imagens.length;
let index = 0;


slides.style.width = `${totalSlides * 100}%`;
for (let img of imagens) {
  img.style.width = `${100 / totalSlides}%`;
}

function trocarSlide() {
  index = (index + 1) % totalSlides;
  const porcentagem = (index * 100) / totalSlides;
  slides.style.transform = `translateX(-${porcentagem}%)`;
}

setInterval(trocarSlide, 3000);


function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("heart");
  coracao.innerHTML = "❤️";

  // posição horizontal aleatória
  coracao.style.left = Math.random() * 100 + "vw";

  // tamanho aleatório
  const tamanho = Math.random() * 20 + 10;
  coracao.style.fontSize = tamanho + "px";

  // duração da queda
  const duracao = Math.random() * 3 + 2;
  coracao.style.animationDuration = duracao + "s";

  document.body.appendChild(coracao);

  // remover após a animação
  setTimeout(() => {
    coracao.remove();
  }, duracao * 1000);
}

// cria vários corações continuamente
setInterval(criarCoracao, 300);

const carta = document.getElementById("carta");

carta.addEventListener("click", () => {
  carta.classList.toggle("aberta"); /* Ao clicar, alterna o estado da carta */
});


