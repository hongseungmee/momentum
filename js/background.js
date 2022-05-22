const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //역으로 js에서 html을 만든다.

bgImage.src = `img/${chosenImage}`; //이미지의 경로. 폴더 이름과 같아야 한다.

document.body.appendChild(bgImage);  //html을 body에 추가. append:붙이다, 첨부하다 //append는 가장 뒤에, prepend는 가장 위에 오게 된다.