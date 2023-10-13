let cityName = document.getElementById('cityName')
let date = document.getElementById('todayDate')
date = new Date()


async function apiOps(cityname) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=68b7c5ae8dca4548bd701327231310&q=${cityname}`)
    let apiData = await response.json()
}
function getDate() {

    let todayDay = document.getElementById('todayDay').innerHTML = date.toLocaleDateString("en-US", { weekday: 'long' });
    let todayMonth = document.getElementById('todayMonth').innerHTML = date.getMonth() + 1
    let todayYear = document.getElementById('todayYear').innerHTML = date.getFullYear()
    let weekDay = document.getElementById('weekDay').innerHTML = date.getDate()
}
function getTime() {
    let todayHour = document.getElementById('todayHour').innerHTML = date.getHours()
    let todayMinute = document.getElementById('todayMinute').innerHTML = date.getMinutes()
    let timeOfDay = document.getElementById('timeOfDay')
        todayHour > 12 ? timeOfDay.innerHTML = 'pm' : timeOfDay.innerHTML = 'am'
}

(function weatherApp() {
    getTime()
    getDate()
})();

setInterval(() => {
    date= new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    console.log(h+":"+m+":"+s);

    hrotation= 30*h + m/2;
    mrotation= 6*m;
    srotation= 6*s;
    console.log(hrotation+":"+mrotation+":"+srotation);

    $("#hour").css("transform", `rotate(${hrotation}deg)`);
    $("#minute").css("transform", `rotate(${mrotation}deg)`);
    $("#second").css("transform", `rotate(${srotation}deg)`);

}, 1000);