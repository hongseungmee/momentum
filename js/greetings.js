const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"; //string의 오타 실수를 막기 위해 
//이와같이 반복되는 string들은 대문자 변수로 저장하여 실수를 만들고 싶지 않은 string 이라는 사실을 기억하도록 한다.

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //setItem : 키에 데이터 쓰기. //"key", value (첫번째는 저장될 아이템의 이름, 두번째 값은 username 변수)
    paintGreetings(username); //[여기서는 유저정보가 input으로부터 옴.]
}

function paintGreetings(username){ //innerText와 greeting.classList.remove 중복(반복)의 문제 -> 이렇게 함수로 만드는 편이 나음.
    //show the greetings
    greeting.innerText = `Hello, ${username}!`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //[여기서는 유저정보가 local storage로부터 옴.]
} else{
    paintGreetings(savedUsername);
}