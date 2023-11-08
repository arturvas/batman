document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const header = document.querySelector(".header");
  let headerVisivel = true;

  window.addEventListener("scroll", function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual > hero.offsetTop) {
      if (headerVisivel) {
        header.classList.add("header--is-hidden");
        headerVisivel = false;
      }
    } else {
      header.classList.remove("header--is-hidden");
      headerVisivel = true;
    }
  });
});
