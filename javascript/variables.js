let active = document.querySelectorAll('.right-div ul li a'),
    loc = document.querySelector('.location'),
    today = document.querySelector('.today'),
    currentMonth = document.querySelector('.today-date'),
    currDay = '',
    secondDay = document.querySelector('.secondDay'),
    thirdDay = document.querySelector('.thirdDay'),
    date = new Date(),
    currentDay = date.getDay(),
    tomorrow = '',
    afterTomorrow = '',
    forecastIcon = document.querySelector('.forecast-icon img'),
    search = document.querySelector('.search'),
    searchVal = '',
    submit = document.querySelector('.submit'),
    degree = document.querySelector('.degreeNum'),
    weather = document.querySelector('.weather'),
    firstSPan = document.querySelector('.spanCont span:first-of-type'),
    secondSpan = document.querySelector('.spanCont span:nth-of-type(2) span'),
    thirdSpan = document.querySelector('.spanCont span:nth-of-type(3)'),
    apiURL = ``,
    secondDayWeath = '',
    thirdDayWeath = '',
    degree2 = document.querySelector('.degree2'),
    degree3 = document.querySelector('.degree3'),
    forecastIcon2 = document.querySelector('.forecast-icon2 img'),
    forecastIcon3 = document.querySelector('.forecast-icon3 img'),
    min_temp1 = document.querySelector('.min_temp1'),
    min_temp2 = document.querySelector('.min_temp2'),
    weather1 = document.querySelector('.weather-1'),
    weather2 = document.querySelector('.weather-2');