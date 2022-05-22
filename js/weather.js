const API_KEY = "3e9e02571e2ac1faab07f25d448187c3";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //url수정 : 주소 끝에 &units=metric 추가
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`; //날씨와 온도 함께 출력
    }); 
    //url에 갈 필요 없이 js가 대신 url을 부른다.
    //fetch는 promise이다. promise:당장 뭔가 일어나지 않고 조금 시간이 걸린 뒤에 일어나는 것
    //응답을 받는데에 시간이 조금 걸리면 then을 쓰는 것이다.
    //.then(data) : 내용을 추출했으면 data를 얻는다
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //getCurrentPosition(실행되었을 때의 함수, 오류가 났을 때의 함수)