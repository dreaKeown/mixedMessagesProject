function randomNumber() {
    return number = Math.floor(Math.random() * 10);
    
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}


const messages = ["A life spent",
                  "If you don't",
                  "Challenges are what",
                  "A mind that is stretched",
                  "Most people do not listen",
                  "If you don't",
                  "The most common",
                  "A person who never made a mistake"];

function randomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

console.log(`Your lucky number is: ${randomNumber()}, your lucky color is: ${randomColor(colors)} and your inspirational message is: ${randomMessage(messages)} `); //Test