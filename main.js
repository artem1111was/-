let template = document.querySelector('.template');
let button = document.querySelector('.button');
let input = document.querySelector('.input');

let getRandomInRange = (min = 1, max = 9) => {
    return Math.floor(min + Math.random() * (max - min + 1))
    }

let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange();

let score = 0;
let menuscore = document.querySelector('.score')





    template.innerHTML = `${firstNumber * secondNumber} / ${secondNumber} = `;
button.addEventListener('click', () => {
    let answer = +input.value 
    if (answer === firstNumber / secondNumber){
        template.innerHTML = `Верно!`;
        score++;
        menuscore.innerHTML = `Ваши очки: ${score}`
    } else {
        template.innerHTML = `Двоешник!`;
        score--
          menuscore.innerHTML = `Ваши очки: ${score}`
    }

    setTimeout(() => {
        getRandomInRange = (min = 1, max = 9) => {
            return Math.floor(min + Math.random() * (max - min + 1))
            }


            firstNumber = getRandomInRange();
            secondNumber = getRandomInRange();
        template.innerHTML = `${firstNumber} / ${secondNumber} = `;},1000)
    

    
} )
