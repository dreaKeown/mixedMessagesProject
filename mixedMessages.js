function randomNumber() {
    return number = Math.floor(Math.random() * 10);
    
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}


const messages = ["A life spent making mistakes is not only more honorable but more useful than a life spent doing nothing. - George Bernard Shaw",
                  "If you don't like something, change it. If you can't change it, change the way you think about it. - Mary Engelbreit",
                  "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J Marine",
                  "A mind that is stretched by a new experience can never go back to it's old dimensions. - Oliver Wendell Holme",
                  "Most people do not listen with the intent to understand, they listen with the intent to reply. - Stephen Covey",
                  "If you don't like the road you're walking, start paving another one. - Dolly Parton",
                  "The most common way people give up their power is by thinking they don't have any. - Alice Walker",
                  "A person who never made a mistake never tried anything new"];

function randomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

function runMessageGenerator() {
   document.getElementById("button").innerHTML = 
(`Your lucky number is: ${randomNumber()}, your lucky color is: ${randomColor(colors)} and your inspirational message is: ${randomMessage(messages)} `);
}