const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random"
const textDisplay = document.getElementById("RandonQuote")
const quoteInputElement = document.getElementById("typing_area")


quoteInputElement.addEventListener("input",() => {
	const ArrayofWords = textDisplay.querySelectorAll("span")
	const Arrayvalue = quoteInputElement.value.split("")

	ArrayofWords.forEach((characterSpan, index) => {
		const character = Arrayvalue[index]

		if (character === null){

			characterSpan.classList.add("normal_text")
			characterSpan.classList.remove("correct_text")
			characterSpan.classList.remove("incorrect_text")
		}
		else if (character === characterSpan.innerText){
			characterSpan.classList.add("correct_text")
			characterSpan.classList.remove("incorrect_text")
		} 
		else{
			characterSpan.classList.remove("correct_text")
			characterSpan.classList.add("incorrect_text")
		}
	})
})

// if(document.getElementById('butt').clicked == true)
// 	{
//    		getNextQuote()
//    		window.alert("Pressed");
// 	}

function getRandomQuote() {
	return fetch(RANDOM_QUOTE_API_URL)
		.then(response => response.json())
		.then(data => data.content)
}

async function getNextQuote() {
	const quote = await getRandomQuote()
	textDisplay.innerHtml = ""

	quote.split("").forEach(character =>{
		const characterSpan = document.createElement("span")
		// characterSpan.classList.add("correct_text")
		characterSpan.innerText = character
		textDisplay.appendChild(characterSpan)
	})

	quoteInputElement.value = null 
}

getNextQuote()