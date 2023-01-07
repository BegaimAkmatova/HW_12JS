let answer1 = 'Амирхан'
let answer2 = 'Амир'
let answer3 = 17
let answer4 = 'да'

let question1 = prompt('Как зовут соседнего друга?')
let question2
let question3

if(question1 === answer1) {
    alert('Правильно!')
    question2 = prompt('Сколько ему лет?')
    if(question2 == answer3) {
        alert('Правильно!')
    } else {
        alert('Неправильно!')
    }
    question3 = prompt('Он в школу ходит?')
    if(question3 === answer4) {
        alert('Правильно!')
    } else {
        alert('Неправильно!')
    }
} else if(question1 === answer2) {
    alert('Почти правильно,но не правильно')
} else {
    alert('Неправильно!')
}

