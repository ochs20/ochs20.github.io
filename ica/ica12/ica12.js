const newBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-tweet');

newBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', getAnswer);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch quote');
    }
}

async function getAnswer() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayAnswer(json['answer']);
    } catch (err) {
        console.log(err);
        alert('Failed to fetch answer');
    }
}

function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

function displayAnswer(answer) {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;
}


getQuote();