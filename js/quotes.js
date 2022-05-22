const quotes = [
    {
        quote: "꽃이 피면 알게 될 것이다. ",
        author: "_ 힌디 격언"
    }, //object1

    {
        quote: "오늘 누군가가 그늘에 앉아 쉴 수 있는 이유는 오래 전에 누군가가 나무를 심었기 때문이다. ",
        author: "_ 워렌 버핏"
    }, //object2 ...

    {
        quote: "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다. ",
        author: "_ 공자"
    },

    {
        quote: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다. ",
        author: "_ 마하트마 간디"
    },

    {
        quote: "가장 큰 위험은 위험없는 삶이다. ",
        author: "_ 스티븐 코비"
    },

    {
        quote: "절대 허송세월 하지마라. 책을 읽든지, 쓰든지, 기도를 하든지, 명상을 하든지, 또는 공익을 위해 노력하든지, 항상 뭔가를 해라. ",
        author: "_ 토마스 아 켐피스"
    },

    {
        quote: "자신을 내 보여라. 그러면 재능이 드러날 것이다. ",
        author:"_ 발타사르 그라시안"
    },

    {
        quote:"이 세상에 열정없이 이루어진 위대한 것은 없다. ",
        author:"_ 게오르크 빌헬름"
    },

    {
        quote: "무엇을 비웃는가보다 한 인간의 성격을 더 잘 보여주는 것은 없다. ",
        author:"_ 요한 볼프강 폰 괴테"
    },

    {
        quote: "네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다. ",
        author:"_ 마하트마 간디"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0-9]); //0부터 읽고, 때문에 1을 뺀다.

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //숫자를 곱하면 그만큼의 경우에만 작동이 되므로 수정 //length를 붙이면 갯수를 알려준다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;