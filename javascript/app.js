for(let i=0; i< active.length; i++){
    active[i].addEventListener('mouseover', function(){
        active[i].classList.add('active')
    })
    active[i].addEventListener('mouseleave', function(){
        active[i].classList.remove('active')
    })
}
search.addEventListener('keyup', api);
document.addEventListener('DOMContentLoaded', async function(){
        const defaultCountry = await fetch('https://api.weatherapi.com/v1/forecast.json?key=28f85ab54a4f46ce9fe120523220906&q=Cairo&days=3')
        const defaultData = await defaultCountry.json()
        loc.innerHTML = defaultData.location.name
                degree.innerHTML = `${defaultData.current.temp_c}<sup>o</sup>C`
                forecastIcon.src = defaultData.current.condition.icon;
                forecastIcon2.src = defaultData.forecast.forecastday[1].day.condition.icon;
                forecastIcon3.src = defaultData.forecast.forecastday[2].day.condition.icon;
                weather.innerHTML =  defaultData.current.condition.text;
                secondSpan.innerHTML = `${defaultData.current.wind_kph}km/h`;
                degree2.innerHTML = `${defaultData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C`
                degree3.innerHTML = `${defaultData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C`
                min_temp1.innerHTML = `${defaultData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C`
                min_temp2.innerHTML = `${defaultData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C`
                weather1.innerHTML = `${defaultData.forecast.forecastday[1].day.condition.text}`
                weather2.innerHTML = `${defaultData.forecast.forecastday[2].day.condition.text}`
            })
function api(){
    if(searchVal.length >= 3){
        async function test(){
            let API = await fetch(apiURL);
            let data = await API.json();
            loc.innerHTML = data.location.name
            degree.innerHTML = `${data.current.temp_c}<sup>o</sup>C`
            forecastIcon.src = data.current.condition.icon;
            forecastIcon2.src = data.forecast.forecastday[1].day.condition.icon;
            forecastIcon3.src = data.forecast.forecastday[2].day.condition.icon;
            weather.innerHTML =  data.current.condition.text;
            secondSpan.innerHTML = `${data.current.wind_kph}km/h`;
            degree2.innerHTML = `${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C`
            degree3.innerHTML = `${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C`
            min_temp1.innerHTML = `${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C`
            min_temp2.innerHTML = `${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C`
            weather1.innerHTML = `${data.forecast.forecastday[1].day.condition.text}`
            weather2.innerHTML = `${data.forecast.forecastday[2].day.condition.text}`
        }
        test()
    }
    searchVal = search.value;
    apiURL = `https://api.weatherapi.com/v1/forecast.json?key=28f85ab54a4f46ce9fe120523220906&q=${searchVal}&days=3`
}
switch(currentDay){
    case 0:
        currDay = 'Sunday'
        tomorrow = 'Monday'
        afterTomorrow = 'Tuesday'
    break
    case 1:
        currDay = 'Monday'
        tomorrow = 'Tuesday'
        afterTomorrow = 'Wednesday'
    break
    case 2:
        currDay = 'Tuesday'
        tomorrow = 'Wednesday'
        afterTomorrow = 'Thursday'
    break
    case 3:
        currDay = 'Wednesday'
        tomorrow = 'Thursday'
        afterTomorrow = 'Friday'
    break
    case 4:
        currDay = 'Thursday'
        tomorrow = 'Friday'
        afterTomorrow = 'Saturday'
    break
    case 5:
        currDay = 'Friday'
        tomorrow = 'Saturday'
        afterTomorrow = 'Sunday'
    break
    case 6:
        currDay = 'Saturday'
        tomorrow = 'Sunday'
        afterTomorrow = 'Monday'
    break
}
today.innerHTML = currDay;
secondDay.innerHTML = tomorrow;
thirdDay.innerHTML = afterTomorrow;

(function(){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    currentMonth.innerHTML = `${date.toLocaleDateString().slice(2, 3)} ${months[date.getMonth()]}`
})()
