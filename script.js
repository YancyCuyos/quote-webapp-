const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("btn");

async function getQuote() {
  try {
    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    quoteText.textContent = `"${data.slip.advice}"`;
    authorText.textContent = "— Advice Slip";
  } catch {
    quoteText.textContent = "Unable to load quote. Please try again.";
    authorText.textContent = "";
  }
}

button.addEventListener("click", getQuote);
getQuote();
