let a = prompt("Введите пожалуйста значение")
let b = +a

if (isNaN(b)){
  // проверка на NaN
    console.log ('Упс, кажется, вы ошиблись')
    
} else if (b % 2 == 0) {
  // является ли четным числом
    console.log ('число чётное')
    
} else if (b % 2 != 0) {
 // является ли нечетным числом
 console.log ('число нечётное')
}