// const button = document.querySelector("#js-new-quote");
// button.addEventListener('click',getQuote);

// const answerButton = document.querySelector("#js-tweet")
// answerButton.addEventListener('click', showAnswer)

// const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"



// async function getQuote(){
//     try {
//         const response = await fetch(endpoint)
//         if (!response.ok){
//             throw Error(response.statusText)
//         }
//         const json = await response.json();
//         displayQuote(json.question);
//         showAnswer(json.answer);

//     }
//     catch (err){
//         console.log(err);
//         alert('Failed to fetch new trivia');
//     }
// }

// function displayQuote(quote){
//     const quoteText = document.querySelector("#js-quote-text");
//     quoteText.textContent = quote;
// }

// async function showAnswer(quote){
//     const answerText = document.querySelector("#js-answer-text");
//     answerText.textContent = quote;
// }

// getQuote();

const button = document.querySelector("#js-new-quote");
button.addEventListener('click',getQuote);

const answerButton = document.querySelector("#js-tweet")
answerButton.addEventListener('click', showAnswer)

const endpoint = "https://opentdb.com/api.php?amount=1&category=21&type=boolean"

async function getQuote(){
    try {
        const response = await fetch(endpoint)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        const question = json.results[0].question;
        displayQuote(question);
        showAnswer(json.results[0].correct_answer);

    }
    catch (err){
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(question){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = question;
}

async function showAnswer(correctAnswer){
    const answerText = document.querySelector("#js-answer-text");
    const answerOptionTrue = document.querySelector("#js-answer-option-true");
    const answerOptionFalse = document.querySelector("#js-answer-option-false");
    if (correctAnswer === "True") {
        answerOptionTrue.classList.add("correct");
        answerText.textContent = "Correct! The answer is true.";
    } else {
        answerOptionFalse.classList.add("correct");
        answerText.textContent = "Correct! The answer is false.";
    }
}

getQuote();
