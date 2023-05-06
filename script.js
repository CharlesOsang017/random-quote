const btnEl = document.getElementById('btn')
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')


const apiURL = "https://api.quotable.io/random"

const getQuote = async() =>{
    try {
        btnEl.innerText = 'Loading...';
        btnEl.disabled = true;
        const response = await fetch(apiURL)
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = '~ ' + quoteAuthor;
        btnEl.innerText = 'Get a quote';
        btnEl.disabled = false;
        // console.log(data.content);
    } catch (error) {
        // console.log(error);
        quoteEl.innerText = 'An error happened, try again later';
        authorEl.style.display = 'none';
        btnEl.innerText = 'Get a quote';
        btnEl.disabled = false;
    }

}

getQuote()
btnEl.addEventListener('click', getQuote)

