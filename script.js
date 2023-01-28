const forma = document.querySelector('form');
const input = document.querySelector('input');
const izlaz = document.querySelector('p');
const img = document.querySelector('img');

////////
const vrijeme = document.getElementById('random-vrijeme');
const randomNumber = (max) => {
    return Math.floor(Math.random(max) * max)
}

let min;

window.onload = () => {
    min = randomNumber(60);
    if (min < 10) {
        min = `0${min}`
    } else {
        min = min;
    }
    vrijeme.innerText = `TOČNO VRIJEME ${randomNumber(24)}:${min}`
}

forma.addEventListener('submit', (e) => {
    e.preventDefault();

    const iznosUEur = parseFloat(input.value);
    const iznosUKn = iznosUEur * 7.53450;
    const konacanIznos = iznosUKn.toFixed(2).replace('.', ',');
    
    izlaz.innerText = `TO JE ${konacanIznos} HRK!`
    img.classList.toggle('rotation')


    min = randomNumber(60);
    if (min < 10) {
        min = `0${min}`
    } else {
        min = min;
    }
    vrijeme.innerText = `TOČNO VRIJEME ${randomNumber(24)}:${min}`
})


