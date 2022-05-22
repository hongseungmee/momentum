const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //시계가 즉시 실행되도록 한다. 넣지 않으면 00:00:00을 거쳐 1초 후에 시작한다.
setInterval(getClock, 1000); //ms단위로 넣는다.