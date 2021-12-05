// We select the element we want to target
var target = document.querySelector("footer");
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

// criei uma função que será chamada quando esse elemento for intersecionado
function callback(entries, observer) {
  // O retorno da chamada retornará uma matriz de entradas, mesmo se você estiver observando apenas um único item
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Mostrar botao
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Esconder botao
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// instanciamos o observador com a função que criamos acima.
let observer = new IntersectionObserver(callback);
// finalmente, comece a observar o elemento alvo
observer.observe(target);
