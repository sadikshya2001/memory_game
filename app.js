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
    var cardsChosen = []
    var cardsChosenID = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/box.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //checking the match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenID[0]
        const optionTwoId = cardsChosenID[1]
        if (cardsChosen[0] === cardsChosen[1]){
            alert('Yay, You found a MATCH!!!')
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardsChosen)
        }else {
            cards[optionOneId].setAttribute('src', 'images/box.jpg')
            cards[optionTwoId].setAttribute('src', 'images/box.jpg')
            alert('Sorry, Try again!')
        }

        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Time for a CELEBRATION! You found all the match. Congratulations!!'
        }

    }

    //flipping the cards
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()



})