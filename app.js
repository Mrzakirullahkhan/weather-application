let searchBtn = document.querySelector(".fa-magnifying-glass");
let myInput = document.querySelector(".myInput");
let degreeValue = document.querySelector(".degree")
let img = document.querySelector(".myImg");
let country  =document.querySelector('.country')
let pressureValue = document.querySelector(".pe")
let speed = document.querySelector('.wd');
let humidity = document.querySelector(".Hy");
let weatherInfo = document.querySelector(".cloudy")
let description = document.querySelector(".ix")
let fullDate = document.querySelector('.date')


// for new date 
let now = new Date();


let arrayOfMonth = ["Jan", "Feb", "Mar" , "Apr" ,"May", "Jun" ,"July" ,"Agust","Sep" ,"Oct", "Nov","Dec"]
let month = now.getMonth();
let myMonth = arrayOfMonth[month];
let date = now.getDate();
let year = now.getFullYear();






function weather(myCity){
    const api_key = "b0042acb82dc7886ade9e09373e28f01";
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${api_key}`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${api_key}`

    fetch(url).then((responce)=>responce.json())
    .then((data)=>{
        country.textContent = data.name
        pressureValue.textContent = `${data.main.pressure} pa`
        speed.textContent = `${data.wind.speed} mph`;
        humidity.textContent = data.main.humidity;
        description.textContent = data.weather[0].description;
        fullDate.textContent = `${date}-${myMonth}-${year}`
        weatherInfo.textContent = data.weather[0].main
        let celcius = data.main.temp - 273.15 ; 
        let roundCalcius = Math.round(celcius);
        degreeValue.textContent = `${roundCalcius} °C`
        let main = data.weather[0].main

        console.log(main)
        console.log(data)

        if(main == "Clear"){
            img.src = 'clear.png'
        }
        if(main == "Clouds"){
            img.src = 'clouds.png'
        }if(main == "Mist"){
            img.src = 'mist.png'
        }if(main == "Smoke"){
            img.src = 'mist.png'
        }
        if(main == "Drizzle"){
            img.src = 'drizzle.png'
        }
        if(main == "Rain"){
            img.src = 'rain.png'
        }
        if(main == "Snow"){
            img.src = 'rain.png'
        }
    })

}



searchBtn.addEventListener("click", ()=>{
    let inputValue = myInput.value;
    weather(inputValue);
})

