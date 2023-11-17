const newBtn = document.querySelector('#js-new-quote');
const questionTxt = document.querySelector('#js-quote-text');

let joke = '';

const endpoint = 'https://icanhazdadjoke.com/';

async function getQuote() {
    try {
        const response = await fetch(endpoint, {
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        displayJoke(json.joke);
        
        changeBackgroundColor();

    } catch (err) {
        console.log(err);
        alert('Failed to fetch new joke');
    }
}

function displayJoke(jokeText) {
    joke = jokeText;
    questionTxt.textContent = jokeText;
}

function changeBackgroundColor() {

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', getQuote);


newBtn.addEventListener('click', getQuote);
