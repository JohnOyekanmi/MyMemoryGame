const cardArray = [
    {
        name: "birthday-cake",
        img: "images/birthday-cake.svg"
    },
    {
        name: "bread",
        img: "images/bread.svg"
    },
    {
        name: "hamburger",
        img: "images/hamburger.svg"
    },
    {
        name: "pizza",
        img: "images/pizza.svg"
    },
    {
        name: "french-fries",
        img: "images/french-fries.svg"
    },
    {
        name: "chocolate-bar",
        img: "images/chocolate-bar.svg"
    },
    {
        name: "birthday-cake",
        img: "images/birthday-cake.svg"
    },
    {
        name: "bread",
        img: "images/bread.svg"
    },
    {
        name: "hamburger",
        img: "images/hamburger.svg"
    },
    {
        name: "pizza",
        img: "images/pizza.svg"
    },
    {
        name: "french-fries",
        img: "images/french-fries.svg"
    },
    {
        name: "chocolate-bar",
        img: "images/chocolate-bar.svg"
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.setAttribute("width", "100")
        card.setAttribute("height", "100")
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function _checkMatch() {
    const cards = document.querySelectorAll("#grid img")
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("You have clicked the same image!")
    }

    // It is a match
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match")

        cards[optionOneId].setAttribute("src", "images/white.png")
        cards[optionTwoId].setAttribute("src", "images/white.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("Sorry try again!")
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = "Congratulation you found them all!"
    }
}

function flipCard() {
    // console.log(cardArray)
    const cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(_checkMatch, 500)
    }
}