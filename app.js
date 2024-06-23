document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'heart',
            img: 'images/heart.png'
        },
        {
            name: 'inlove',
            img: 'images/inlove.png'
        },
        {
            name: 'money',
            img: 'images/money.png'
        },
        {
            name: 'sad',
            img: 'images/sad.png'
        },
        {
            name: 'thumbsUP',
            img: 'images/thumbsUP.png'
        },
        {
            name: 'wow',
            img: 'images/wow.png'
        },
        {
            name: 'heart',
            img: 'images/heart.png'
        },
        {
            name: 'inlove',
            img: 'images/inlove.png'
        },
        {
            name: 'money',
            img: 'images/money.png'
        },
        {
            name: 'sad',
            img: 'images/sad.png'
        },
        {
            name: 'thumbsUP',
            img: 'images/thumbsUP.png'
        },
        {
            name: 'wow',
            img: 'images/wow.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const timerDisplay = document.querySelector('#timer')
    const restartButton = document.querySelector('#restart')
    var cardsChosen = []
    var cardsChosenID = []
    var cardsWon = []
    let startTime, timerInterval

    // Start the timer
    function startTimer() {
        startTime = Date.now()
        timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000)
            timerDisplay.textContent = elapsedTime
        }, 1000)
    }

    // Stop the timer
    function stopTimer() {
        clearInterval(timerInterval)
    }

    //creating the main board
    function createBoard() {
        grid.innerHTML = '' // Clear the grid
        cardArray.forEach((_, i) => {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/box.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        })
        startTimer() // Start the timer when the board is created
    }

    //checking the match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenID[0]
        const optionTwoId = cardsChosenID[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            //alert('Yay, You found a MATCH!!!')
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/box.jpg')
            cards[optionTwoId].setAttribute('src', 'images/box.jpg')
            //alert('Sorry, Try again!')
        }

        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Time for a CELEBRATION! You found all the match. Congratulations!!'
            stopTimer() // Stop the timer when the game is won
        }
    }

    //flipping the cards
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenID.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    // Restart the game
    restartButton.addEventListener('click', () => {
        cardsChosen = []
        cardsChosenID = []
        cardsWon = []
        resultDisplay.textContent = '0'
        timerDisplay.textContent = '0'
        stopTimer()
        cardArray.sort(() => 0.5 - Math.random()) // Reshuffle cards
        createBoard() // Recreate the board
    })

    createBoard()

})
