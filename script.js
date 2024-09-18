document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const items = document.querySelectorAll('.item');
  const indicators = document.querySelectorAll('.indicadores ul li');
  const numberDisplay = document.querySelector('.numero');
  let currentIndex = 0;

  function updateCarousel() {
      items.forEach((item, index) => {
          if (index === currentIndex) {
              item.classList.add('active');
              item.style.transform = 'translateX(0)';
              item.style.opacity = '1';
          } else {
              item.classList.remove('active');
              item.style.transform = 'translateX(100vw)';
              item.style.opacity = '0';
          }
      });
      indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
              indicator.classList.add('active');
          } else {
              indicator.classList.remove('active');
          }
      });
      numberDisplay.textContent = `0${currentIndex + 1}`;
  }

  if (prevButton) {
      prevButton.addEventListener('click', function() {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          updateCarousel();
      });
  } else {
      console.error('Elemento com a classe "prev" não encontrado.');
  }

  if (nextButton) {
      nextButton.addEventListener('click', function() {
          currentIndex = (currentIndex + 1) % items.length;
          updateCarousel();
      });
  } else {
      console.error('Elemento com a classe "next" não encontrado.');
  }

  if (items.length > 0 && indicators.length > 0 && numberDisplay) {
      updateCarousel();
  } else {
      console.error('Elementos necessários não encontrados.');
  }
});



const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      } 
      else{
        entry.target.classList.remove('show')
      }
    })
  } )

  const elements = document.querySelectorAll('.hidden')


  elements.forEach((element) => myObserver.observe(element) )




  let currentPage = 1; // Página inicial

// Função para mostrar uma página específica
function showPage(pageNumber) {
  const pages = document.querySelectorAll('.conteudos-page'); // Seleciona todas as páginas

  // Esconde todas as páginas
  pages.forEach(page => {
    page.style.display = 'none';
  });

  // Mostra a página correspondente ao número passado
  const currentPageElement = document.getElementById(`page-${pageNumber}`);
  if (currentPageElement) {
    currentPageElement.style.display = 'block';
  }

  // Atualiza o número da página na interface
  document.getElementById('page-number').innerText = pageNumber;
}

// Função para navegar para a próxima página
document.getElementById('next').addEventListener('click', function() {
  const pages = document.querySelectorAll('.conteudos-page');
  if (currentPage < pages.length) {
    currentPage++; // Incrementa o número da página atual
    showPage(currentPage); // Mostra a nova página
  }
});

// Função para navegar para a página anterior
document.getElementById('prev').addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--; // Decrementa o número da página atual
    showPage(currentPage); // Mostra a página anterior
  }
});

// Inicializa a primeira página quando a página é carregada
showPage(currentPage);
  