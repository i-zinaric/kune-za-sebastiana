const forma = document.querySelector('form');
const input = document.querySelector('input');
const izlaz = document.querySelector('p');
const img = document.querySelector('img');

forma.addEventListener('submit', (e) => {
    e.preventDefault();

    const iznosUEur = parseFloat(input.value);
    const iznosUKn = iznosUEur * 7.53450;
    const konacanIznos = iznosUKn.toFixed(2).replace('.', ',');
    
    izlaz.innerText = `TO JE ${konacanIznos} HRK!`
    img.classList.add('rotation')
})