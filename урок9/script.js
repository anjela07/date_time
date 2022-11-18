
let clock  = () =>{
    let date = new Date ()
    let month_num = date.getMonth();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let a = date.getDate();
    let b = date.getDay(date)
    console.log(b);
    
    
    if (day <= 9) day = '0' + day;
    if (hours <= 9) hours = '0' + hours;
    if (minutes <= 9) minutes = '0' + minutes;
    if (seconds <= 9) seconds = '0' + seconds;

    let month = [
        "January",
        "Fabruary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let days = [
        "Monday",
        "Tusday",
        "Wednesday",
        "Thursday",
        "Fri",
        "Saturday",
        "Sunday",
    ]
   
    

     let date_time = " " + " " + days[b-1] +hours + ":" + minutes + ":" +seconds + " " + a + " " + month[month_num];
    let element = document.getElementById('hours');
     element.innerHTML = date_time
    setTimeout("clock()",1000);
    let
    //  let date_time = month_num;
    //  console.log(month[month_num]);
    // let date_time = "second" + ' - ' + seconds + "min" + " - " + minutes;
//   console.log(date_time);
//   setTimeout(() => {
//     clock()
//   },1000);
 //1000-1секунда
};



alert('хотите узнать время?')
let password = prompt ('сколько будет 2+2')
if(password==4){
    clock();
}else {
    alert('ответ неверный')
}