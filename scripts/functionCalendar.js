const currentDay = new Date();
const year = currentDay.getFullYear();
const month = currentDay.getMonth();
const firstDayMonth = new Date(year, month);
const lastDayMonth = new Date(year, month + 1,0 ).getDate();

const daysWeek = document.querySelector('.calendarDay');


const changeTitle = () =>{
    const calendarMonth = document.querySelector('.calendar-month');
    let calendarTitle = calendarMonth.innerHTML = '';
    let monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    calendarTitle = calendarMonth.innerHTML = `${monthName[month]}  ${year}`;

}

const nextMonth = () =>{
    const next = document.querySelector('.next')//não se esqueça de fazer sua proxima funcão aqui para ,mudar o mês;
}

const putPoint = () =>{
    //adiciona ponto colorido abaixo do dia atual;
    const diadoMes = document.querySelectorAll('.day');
       diadoMes.forEach(day => {
        if(currentDay.getDate() == day.textContent){
            day.className = 'day today';
            const point = document.createElement('div');
            day.appendChild(point);
            point.id = 'today';
            point.innerHTML = '.';
        }
    })
}

const openedDays = () =>{
    let openDays = [];
    for(let i=0; i<2; i++){
        let aleatorio = Math.floor(Math.random()*lastDayMonth)+1;
        openDays.push(aleatorio);

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
}

//adiciona na tela os dias do mês;
function calendar (){
    changeTitle();

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
    
    putPoint();
    openedDays();
    nextMonth();
}

calendar();





