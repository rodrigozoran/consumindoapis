let dataAtual = new Date();

let numData = dataAtual.getDate();
let weekData = dataAtual.getDay();
let month = dataAtual.getMonth();
let year = dataAtual.getFullYear();

let hours = dataAtual.getHours();
let minutes = dataAtual.getMinutes();
let seconds = dataAtual.getSeconds();

let dayName;
let monthName;

switch(weekData){
    case 0:
        dayName = "Domingo";
    break;
    case 1:
        dayName = "Segunda-Feira";
    break;
    case 2:
        dayName = "Terça-Feira";
    break;
    case 3:
        dayName = "Quarta-Feira";
    break;
    case 4:
        dayName = "Quinta-Feira";
    break;
    case 5:
        dayName = "Sexta-Feira";
    break;
    case 6:
        dayName = "Sábado";
    break;
    default:
        dayName = "Invalid Day";
}

switch(month){
    case 0:
        monthName = "Janeiro"
    break;
    case 1:
        monthName = "Fevereiro"
    break;
    case 2:
        monthName = "Março"
    break;
    case 3:
        monthName = "Abril"
    break;
    case 4:
        monthName = "Maio"
    break;
    case 5:
        monthName = "Junho"
    break;
    case 6:
        monthName = "Julho"
    break;
    case 7:
        monthName = "Agosto"
    break;
    case 8:
        monthName = "Setembro"
    break;
    case 9:
        monthName = "Outubro"
    break;
    case 10:
        monthName = "Novembro"
    break;
    case 11:
        monthName = "Dezembro"
    break;
}

function setZeroDate(){
    if(numData <= 9){
        return "0"+numData;
    }else{
        return numData;
    }
}

function setZeroHour(){
    if(hours <= 9){
        return "0"+hours;
    }else{
        return hours
    }
}

function setZeroHMinutes(){
    if(minutes <= 9){
        return "0"+minutes;
    }else{
        return minutes
    }
}

function setDateTime(){
    document.getElementById("date").innerHTML = dayName + ", " + setZeroDate(numData) + " de " + monthName + " de " + year + ".";
    document.getElementById("time").innerHTML = setZeroHour(hours) + ":" + setZeroHMinutes(minutes);
}