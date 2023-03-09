//accessing the elements
const inputEle=document.getElementById('location-input');
const tempEle=document.getElementById('temp');
const WeatherEle=document.getElementById('weather-info');
const locationEle=document.getElementById('location-info');
const iconEle=document.getElementById('icon');
const btnEle=document.getElementById('btn');

//storing the api key
const apikey='42572c70859952dd0732673de3266bf2'

//functionality
btnEle.onclick=function(){
    if(inputEle.value==''){
        alert('please enter the location')
    }
    else{
        let loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        //fetching the data from api and converted into json format
        fetch(url).then(res=>res.json())

        //this is resolve state
        .then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            locationEle.innerText=name
            tempEle.innerText=Math.floor(feels_like-273)
            WeatherEle.innerText=description

        })
        //reject state
        .catch(()=>{
            alert('invalid location')
        })
        inputEle.value==''

    }
}