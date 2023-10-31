let date = document.getElementById('todayDate')
date = new Date()

let searchBar = document.getElementById('searchBar')

async function weather(cityname) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=68b7c5ae8dca4548bd701327231310&q=${cityname}&days=3`)
    let weatherData = await response.json()
    return weatherData
}


function getWeather(data){
    let weatherDesc = document.getElementById('weatherDesc').innerHTML = data.current.condition.text
    let weatherTemp = document.getElementById('weatherTemp').innerHTML = data.current.temp_c
    let cityName = document.getElementById('cityName').innerHTML = data.location.name
    let cityCountry = document.getElementById('cityCountry').innerHTML = data.location.country
    let cityContinent = document.getElementById('cityContinent').innerHTML = data.location.tz_id
    let weatherImg = document.getElementById('weatherImg').setAttribute('src', data.current.condition.icon)

}

function getNextDayWeather(data){
    let nextDays = document.getElementById('nextDays')
    let forecast 
}

function getDate() {
    let todayDay = document.getElementById('todayDay').innerHTML = date.getDate()
    let todayMonth = document.getElementById('todayMonth').innerHTML = date.getMonth() + 1
    let todayYear = document.getElementById('todayYear').innerHTML = date.getFullYear()
    let weekDay = document.getElementById('weekDay').innerHTML = date.toLocaleDateString("en-US", { weekday: 'long' });
}
function getTime() {
    let todayHour = document.getElementById('todayHour').innerHTML = date.getHours()
    let todayMinute = document.getElementById('todayMinute').innerHTML = date.getMinutes()
    let timeOfDay = document.getElementById('timeOfDay')
    todayHour > 12 ? timeOfDay.innerHTML = 'pm' : timeOfDay.innerHTML = 'am'
}


async function weatherApp(city='cairo') {
    let weatherData = await weather(city)
    if (!weatherData.error) {
        getWeather(weatherData)
        getNextDayWeather(weatherData)
    }
    
    getDate()
    getTime()
};
weatherApp()
searchBar.addEventListener('input',function(){
    weatherApp(searchBar.value);
})

$('#demo').datetimepicker({
    baseCls: "perfect-datetimepicker",
    viewMode: $.fn.datetimepicker.CONSTS.VIEWMODE.YMD, // see below
    firstDayOfWeek: 0, // 0 = sunday
    date: null, //initial date
    endDate: null, //end date
    startDate: null, //start date
    language: 'en', //I18N
    //date update event
    onDateChange: null,
    //clear button click event
    onClear: null,
    //ok button click event
    onOk: null,
    //close button click event
    onClose: null,
    //today button click event
    onToday: null
});