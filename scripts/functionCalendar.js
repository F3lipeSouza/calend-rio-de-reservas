const currentDay = new Date();
const year = currentDay.getFullYear();
const month = currentDay.getMonth();
const lastDayMonth = new Date(year, month + 1,0 ).getDate();

const daysWeek = document.querySelector('.calendarDay');



function calendar (){
    for (let dia = 1; dia <= lastDayMonth; dia ++){
        let dias = document.createElement('p');
        dias.innerHTML = dia;
        daysWeek.appendChild(dias);
        console.log(dias);
    };
}
calendar()

console.log(currentDay);
console.log(year);
console.log(month +1);
console.log(lastDayMonth);

console.log(daysWeek)