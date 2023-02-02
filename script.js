const text = document.getElementById("text")
const button = document.getElementById("button")
const copyright = document.querySelector(".copyright")

const answers = [
	"Sammuta kone",
	"Tee työkalu",
	"Juo Pepsiä",
	"Katso Twitchistä Ulttista",
	"Katso YouTubesta videoita"
]

copyright.innerText = `© ${new Date().getFullYear()} Jesun Maailma`

document.addEventListener("submit", (e) => {
	e.preventDefault()
	askQuestion(text.value)
})

function askQuestion(question) {
	const answer = document.querySelector("#answer")
	if (!question) {
		answer.classList.remove("hidden")
		answer.innerText = "Ei kysymystä annettu."

		const timeout = setTimeout(() => {
			answer.innerText = ""
			answer.classList.add("hidden")
		}, 5000)
		return;
	}

	answer.classList.remove("hidden")
	answer.innerText = `${answers[Math.floor(Math.random() * answers.length)]}.`
	
	const timeout = setTimeout(() => {
		answer.innerText = ""
		answer.classList.add("hidden")
	}, 5000)

	return () => clearTimeout(timeout)
}