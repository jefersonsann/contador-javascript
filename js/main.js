const contador = document.querySelector('.counter');
const btns = document.querySelectorAll('.btn');
// Valor inicial/base

let count = 0;

// Loop e funções
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const btnClass = e.currentTarget.classList;
    // Logica para mudar o valor
    if (btnClass.contains('decremento')) {
      count--;
    } else if (btnClass.contains('incremento')) {
      count++;
    } else {
      count = 0;
    }

    // Logica para mudar a cor
    if (count > 0) {
      contador.style.color = 'green';
    }
    if (count < 0) {
      contador.style.color = 'red';
    }
    if (count === 0) {
      contador.style.color = null;
    }

    // injetando o valor atualizado na tela
    contador.textContent = count;
  });
});
