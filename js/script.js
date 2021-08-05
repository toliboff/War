const deck = [
  { name: '2C',
    value: 2,
    open: false,
  },
  { name: '2D',
    value: 2,
    open: false,
  },
  { name: '2H',
    value: 2,
    open: false,
  },
  { name: '2S',
    value: 2,
    open: false,
  },
  { name: '3C',
    value: 3,
    open: false,
  },
  { name: '3D',
    value: 3,
    open: false,
  },
  { name: '3H',
    value: 3,
    open: false,
  },
  { name: '3S',
    value: 3,
    open: false,
  },
  { name: '4C',
    value: 4,
    open: false,
  },
  { name: '4D',
    value: 4,
    open: false,
  },
  { name: '4H',
    value: 4,
    open: false,
  },
  { name: '4S',
    value: 4,
    open: false,
  },
  { name: '5C',
    value: 5,
    open: false,
  },
  { name: '5D',
    value: 5,
    open: false,
  },
  { name: '5H',
    value: 5,
    open: false,
  },
  { name: '5S',
    value: 5,
    open: false,
  },
  { name: '6C',
    value: 6,
    open: false,
  },
  { name: '6D',
    value: 6,
    open: false,
  },
  { name: '6H',
    value: 6,
    open: false,
  },
  { name: '6S',
    value: 6,
    open: false,
  },
  { name: '7C',
    value: 7,
    open: false,
  },
  { name: '7D',
    value: 7,
    open: false,
  },
  { name: '7H',
    value: 7,
    open: false,
  },
  { name: '7S',
    value: 7,
    open: false,
  },
  { name: '8C',
    value: 8,
    open: false,
  },
  { name: '8D',
    value: 8,
    open: false,
  },
  { name: '8H',
    value: 8,
    open: false,
  },
  { name: '8S',
    value: 8,
    open: false,
  },
  { name: '9C',
    value: 9,
    open: false,
  },
  { name: '9D',
    value: 9,
    open: false,
  },
  { name: '9H',
    value: 9,
    open: false,
  },
  { name: '9S',
    value: 9,
    open: false,
  },
  { name: '10C',
    value: 10,
    open: false,
  },
  { name: '10D',
    value: 10,
    open: false,
  },
  { name: '10H',
    value: 10,
    open: false,
  },
  { name: '10S',
    value: 10,
    open: false,
  },
  { name: 'JC',
    value: 11,
    open: false,
  },
  { name: 'JD',
    value: 11,
    open: false,
  },
  { name: 'JH',
    value: 11,
    open: false,
  },
  { name: 'JS',
    value: 11,
    open: false,
  },
  { name: 'QC',
    value: 12,
    open: false,
  },
  { name: 'QD',
    value: 12,
    open: false,
  },
  { name: 'QH',
    value: 12,
    open: false,
  },
  { name: 'QS',
    value: 12,
    open: false,
  },
  { name: 'KC',
    value: 13,
    open: false,
  },
  { name: 'KD',
    value: 13,
    open: false,
  },
  { name: 'KH',
    value: 13,
    open: false,
  },
  { name: 'KS',
    value: 13,
    open: false,
  },
  { name: 'AC',
    value: 14,
    open: false,
  },
  { name: 'AD',
    value: 14,
    open: false,
  },
  { name: 'AH',
    value: 14,
    open: false,
  },
  { name: 'AS',
    value: 14,
    open: false,
  },
];

const computerCards = [];
const playerCards = [];

const computerOfferCards = [];
const playerOfferCards = [];

const computerWonCards = [];
const playerWonCards = [];

window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('gameInfo')){

  } else {
   
  }

  document.querySelector('#dealBtn').addEventListener('click', ()=>{
    startGame();
  })
})

function startGame(){
 const shuffledDeck = shuffleCard(deck);
 shuffledDeck.forEach((card, index) => {
   index%2===0?playerCards.push(card):computerCards.push(card);
 })
 visualize();
document.querySelector('#start').style.display='none'
document.querySelector('#opponent-cards').children[0].src='./assets/cards/back.png'
document.querySelector('#player-cards').children[0].src='./assets/cards/back.png'

}

function shuffleCard(cards){
  const shuffled = cards.slice();
  return shuffled.sort((a, b) => .5 - Math.random());
}

function visualize (cards) {

};

const playerCard = document.querySelector('#player-card');
const opponentCard = document.querySelector('#opponent-card');

document.querySelector('#player-cards').addEventListener('click', ()=>{

  battle();
  if (computerCards.length===0) console.log('THE WINNER IS COMPUTER');
  if (playerCards.length===0) console.log('THE WINNER IS PLAYER');

})

function battle(){
  let tempPlayerCard = playerCards.shift();
  playerOfferCards.push(tempPlayerCard);
  playerCard.src=`assets/cards/${tempPlayerCard.name}.png`;
  playerCard.dataset.strength = tempPlayerCard.value;

  let tempComputerCard = computerCards.shift();
  computerOfferCards.push(tempComputerCard);
  opponentCard.src=`assets/cards/${tempComputerCard.name}.png`;
  opponentCard.dataset.strength = tempComputerCard.value;
  setTimeout(()=>chooseWinner(tempPlayerCard.value, tempComputerCard.value), 500);

  if (tempComputerCard.value > tempComputerCard.value) {
    computerCards.concat(tempPlayerCard, tempComputerCard);
  } else if (tempComputerCard.value < tempComputerCard.value) {
    computerCards.concat(tempPlayerCard, tempComputerCard);
  } else {
    // for (let i=0; i<5; i++) {
    //   tempPlayerCard = playerCards.shift();
    //   playerOfferCards.push(tempPlayerCard);

    //   tempComputerCard = computerCards.shift();
    //   computerOfferCards.push(tempComputerCard);
    // }

    // if (playerOfferCards.value > playerOfferCards.value) {
    //   computerCards.concat(tempPlayerCard, tempComputerCard);
    // }else {
    //   computerCards.concat(tempPlayerCard, tempComputerCard);
    // }
    // tempPlayerCard.length = 0;
    // tempComputerCard.length = 0;
  }
}
function chooseWinner(player, opponent) {
  console.log('Player:', player, 'Computer:', opponent);
  if(player > opponent){
    console.log('Player wins!')
  } else if (player < opponent){
    console.log('Computer wins!')
  } else {
    console.log('War!')
  }

}