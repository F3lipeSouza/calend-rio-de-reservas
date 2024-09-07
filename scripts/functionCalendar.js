const currentDay = new Date();
let year = currentDay.getFullYear();
let month = currentDay.getMonth();

const daysWeek = document.querySelector('.calendarDay');
const next = document.querySelector('.next');
const last = document.querySelector('.previous');



const changeTitle = () =>{
    const calendarMonth = document.querySelector('.calendar-month');
    let calendarTitle = calendarMonth.innerHTML = '';
    let monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    calendarTitle = calendarMonth.innerHTML = `${monthName[month]}  ${year}`;

}


const putPoint = () =>{
    //adiciona ponto colorido abaixo do dia atual;
    const diadoMes = document.querySelectorAll('.day');
       diadoMes.forEach(day => {
        if(currentDay.getDate() == day.textContent && currentDay.getFullYear() == year && currentDay.getMonth() == month){
            day.className = 'day today';
            const point = document.createElement('div');
            day.appendChild(point);
            point.id = 'today';
            point.innerHTML = '.';
        }
    })
}

const openedDays = () =>{
    let openDays = [21, 22];
    const diadoMes = document.querySelectorAll('.day');

    diadoMes.forEach(day => {
        if(openDays[0] == day.textContent){
            day.className = 'openDay day';
        };

        if(openDays[1] == day.textContent){
            day.className = 'openDay day';
        };

    })
}


//adiciona na tela os dias do mês;
function calendar (){ 
    const firstDayMonth = new Date(year, month);
    let lastDayMonth = new Date(year, month + 1,0 ).getDate();

    changeTitle();

    //preenche com campo vazio os primeiros dias do mês;
    for(let dia = 1; dia <= firstDayMonth.getDay(); dia++){
        let dias = document.createElement('p');
        dias.innerHTML = '';
        dias.className = 'day';
        daysWeek.appendChild(dias);
    }
    
    //preenche os dias do mês;
    for (let dia = 1; dia <= lastDayMonth; dia ++){
        let dias = document.createElement('p');
        dias.innerHTML = dia;
        dias.className = 'day';
        daysWeek.appendChild(dias);
    }
    
    putPoint();
    openedDays();
}
calendar();

//atualiza o calendario para o mês seguinte;
const nextMonth = () =>{
    let day = document.querySelectorAll('.day');
    day.forEach(day =>day.remove())
    
    //atualiza o nome do mês e o ano;
    month = month +1;
    if(month > 11){
        month = 0;
        year = year + 1;
    };

    calendar();        
};

//atualiza o calenadrio para o mês anterior;
const lastMonth = () =>{
    let day = document.querySelectorAll('.day');
    day.forEach(day =>day.remove())
    
    //atualiza o nome do mês e o ano;
    month = month -1;
    if(month < 0){
        month = 11;
        year = year - 1;
    };

    calendar();        
};

next.addEventListener('click', nextMonth);
last.addEventListener('click', lastMonth);







