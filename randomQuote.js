//Quote Generator 
// 'use strict'
welcome()

function welcome() {
    console.log('Your Daily Quote Generator');
    quoteType()
}

function quoteType (type) {

    var type = prompt('For Animal Quotes Enter: 1\nFor Flowers Quotes Enter: 2\n\nEnter Choice');

    if (type === '1' || type === '2') {
        switch (type) {
            case '1':
                console.log(randomAnimalQuotes());
                return;

            case '2':
                console.log(randomFlowersQuotes());
                return;
        }
    } 
}

// function userQuit () {
//     console.log(alert('Have a good day'));
// }
function randomAnimalQuotes(number) {
    var number = prompt('Enter How Many Quotes You Would Like')

    if (number >= '1' && number <= '5') {
        console.log('Here are your Animal quotes as requested');

        const fragBeginning = ['These are very beautiful ', 'I like looking at ', ' Today We saw some new ', 'There a nice '];

        const fragMiddle = ['animal pictures', 'cattle horns', 'sheep wool', 'fast cars', 'mobile phones'];

        const fragEnd = [' i would love to buy one', ' they are very nice', ' they are so breath taking', ' in the shop'];

        //Random generated quotes

        var quotes = [];

        for (var i = 0; i < number; i++) {

            const fragBeginningRandom = [Math.floor(Math.random() * fragBeginning.length)];
            const fragMiddelRandom = [Math.floor(Math.random() * fragMiddle.length)];
            const fragEndRandom = [Math.floor(Math.random() * fragBeginning.length)];
            const fullQuote = [fragBeginning[fragBeginningRandom] + fragMiddle[fragMiddelRandom] + fragEnd[fragEndRandom]];
            quotes.push(fullQuote);

        }
        return quotes;

    } else {
        alert('Please enter and number between 1 and 5');
        randomAnimalQuotes()
    }
}

function randomFlowersQuotes(number) {

    var number = prompt('Enter How Many Quotes You Would Like');

    if (number >= '1' && number <= '5') {

        console.log('Here are your Flowers quotes as requested')

        const fragBeginning = ['These are very beautiful ', 'I like looking at ', ' Today We saw some new ', 'There a nice '];
        const fragMiddle = ['flower pots', 'hibiscuss trees', 'red roses', 'lily flowers', 'rare flowers'];
        const fragEnd = [' i would love to buy one', ' they are very nice', ' they are so breathtaking', ' in the shop'];


        var quotes = [];

        for (var i = 0; i < number; i++) {

            const fragBeginningRandom = [Math.floor(Math.random() * fragBeginning.length)];
            const fragMiddelRandom = [Math.floor(Math.random() * fragMiddle.length)];
            const fragEndRandom = [Math.floor(Math.random() * fragBeginning.length)];
            const fullQuote = [fragBeginning[fragBeginningRandom] + fragMiddle[fragMiddelRandom] + fragEnd[fragEndRandom]];
            quotes.push(fullQuote);
        }
        return quotes;
    } else {
        alert('Please enter and number between 1 and 5');
        randomFlowersQuotes()
    }
}
