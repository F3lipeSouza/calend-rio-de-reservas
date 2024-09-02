const currentDay = new Date();
const year = currentDay.getFullYear();
const month = currentDay.getMonth();
const firstDayMonth = new Date(year, month);
const lastDayMonth = new Date(year, month + 1,0 ).getDate();

const daysWeek = document.querySelector('.calendarDay');

//adiciona na tela os dias do mês;
function calendar (){

    //preenche com campo vazio os primeiros dias do mês;
    for(let dia = 1; dia <= firstDayMonth.getDay(); dia++){
        let dias = document.createElement('p');
        dias.innerHTML = '';
        daysWeek.appendChild(dias);
    }
    
    //preenche os dias do mês;
    for (let dia = 1; dia <= lastDayMonth; dia ++){
        let dias = document.createElement('p');
        dias.innerHTML = dia;
        dias.className = 'day';
        daysWeek.appendChild(dias);
    }
    
    const diadoMes = document.querySelectorAll('.day');
    console.log(diadoMes);
    diadoMes.forEach(day => {
        console.log(day.textContent);
        if(currentDay.getDate() == day.textContent){
            const point = document.createElement('div');
            day.appendChild(point);
            point.id = 'today';
            point.innerHTML = '.';

        }
    })
}

calendar();





