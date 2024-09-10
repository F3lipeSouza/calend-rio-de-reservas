const currentDay = new Date();
let year = currentDay.getFullYear();
let month = currentDay.getMonth();

const daysWeek = document.querySelector('.calendarDay');
const next = document.querySelector('.next');
const last = document.querySelector('.previous');


//muda o titulo e ano do mês;
const changeTitle = () =>{
    const calendarMonth = document.querySelector('.calendar-month');
    let calendarTitle = calendarMonth.innerHTML = '';
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'November', 'December'];
    calendarTitle = calendarMonth.innerHTML = `${monthName[month]}  ${year}`;
}

//adiciona ponto colorido abaixo do dia atual;
const putPoint = () =>{
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

//mostra no calendario os dias disponiveis para reserva;
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

//adiciona a parte lateral com horarios disponiveis nas datas;
const available = (day) =>{
    const ableDays = document.querySelectorAll('.openDay');
    const main = document.querySelector('main');

    
    console.log('ta workando'); 
    const aside = document.createElement('aside');

    //garante que a tag aside não existe no HTML;
    let existAside = main.querySelector('aside');
    if(existAside){
        main.removeChild(existAside);
        ableDays.forEach(nonSelectedDay =>{ nonSelectedDay.className = 'openDay day'});
    }

    let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'November', 'December'];

    //cria tags e elementos necessarios para a nova aba;
    const title = document.createElement('p');
    if(day.target == ableDays[0]){
        let selected = new Date(year, month, 21);
        title.innerHTML = `${weekDay[selected.getDay()]}, ${monthName[month]} 21`;
        title.className = 'title';
        day.target.className = 'openDay day selected';
    };

    if(day.target == ableDays[1]){
        let selected = new Date(year, month, 22);
        title.innerHTML = `${weekDay[selected.getDay()]}, ${monthName[month]} 22`
        title.className = 'title';
        day.target.className = 'openDay day selected';
    };

    const btn1 = document.createElement('button');
    btn1.innerHTML = '14:00pm';
    btn1.className = 'btn';

    const btn2 = document.createElement('button');
    btn2.innerHTML = '15:00pm';
    btn2.className = 'btn';
    
    aside.append(title, btn1, btn2);
    main.append(aside);

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
    const ableDays = document.querySelectorAll('.openDay');

    ableDays.forEach(day =>{
        day.addEventListener('click', available);
    })
    
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

//atualiza o calendario para o mês anterior;
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





