
// const cards = ["anniversay", "bday", "new years"]
// const events = ["holly", "mom", "teddy"]

// function writeCards(cards, events) {
//     for (let i = 0; i < cards.length; i++) {
//       console.log(`Well... ${cards[i]} cheers to your ${[i]}!`);
//       // debugger;
//     }
  
//     return cards;
// }

// writeCards(cards, events)


const messages = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++)
    messages.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    return messages
}

function countDown(num) {
    let cd = (num);
    while (cd >= 0) {
        console.log(cd--);
    }
}


countDown(10)