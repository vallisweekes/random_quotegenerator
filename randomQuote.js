
/********************Random Quote Generator Project *****************
1. The quotes are generated randomly one by one with each JavaScript call.
2.Each quote is a combination of at least 3 sentence fragments (it's up to 
you to create these sentence fragments: beginning, middle, and end)
3.The quotes should be relatively coherent (no exclamation points in the middle of a sentence, for example)
4.Select the number of quotes generated (between 1 and 5)
5.Choose between 2 types of quote generators (accordingly, you'll need two different sets of sentences)
6.Once the quotes are generated, have the program generate new quotes or quit the program
  */  

 
 //ANIMAL QUOTE GENERATOR 
 function randomAnimalQuotes() {
     
     // Take User Input 
     var number = prompt('How Many Quotes Would You Like?');
     
     if (number >= '1' && number <= '5') {
         console.log('Your Daily Quote Generator');
         console.log('Here Are Your Animal Quotes As Requested');
         
         //Quote Fragments 
         
         const fragBeginning = ['These are very beautiful ', 'I like looking at ', 'Today We saw some new ', 'There a nice '];
         
         const fragMiddle = ['animal pictures', 'cattle horns', 'sheep wool', 'fast cars', 'mobile phones'];
         
         const fragEnd = [' i would love to buy one', ' they are very nice', ' they are so breath taking', ' in the shop'];
         
         
         const quotes = [];
         
         for (let i = 0; i < number; i++) {
             
             const fragBeginningRandom = [Math.floor(Math.random() * fragBeginning.length)];
             const fragMiddelRandom = [Math.floor(Math.random() * fragMiddle.length)];
             const fragEndRandom = [Math.floor(Math.random() * fragBeginning.length)];
             const fullQuote = [fragBeginning[fragBeginningRandom] + fragMiddle[fragMiddelRandom] + fragEnd[fragEndRandom]];
             quotes.push(fullQuote);
             fullQuote.forEach((item) => console.log(item));
            }
            // return quotes;
            
        } else {
            alert('Please enter and number between 1 and 5');
            randomAnimalQuotes()
        }
    }
    
    //FLOWERS QUOTE GENERATOR
    
    function randomFlowersQuotes() {
        // Take User Input 
        var number = prompt('How Many Quotes You Would Like?');
        
        if (number >= '1' && number <= '5') {
            console.log('Your Daily Quote Generator');
            console.log('Here Are Your Flowers Quotes As Requested');
            
            //Quote Fragments 
            
            const fragBeginning = ['These are very beautiful ', 'I like looking at ', ' Today We saw some new ', 'There a nice '];
            const fragMiddle = ['flower pots', 'hibiscuss trees', 'red roses', 'lily flowers', 'rare flowers'];
            const fragEnd = [' i would love to buy one', ' they are very nice', ' they are so breathtaking', ' in the shop'];
            
            
            const quotes = [];
            
            for (let i = 0; i < number; i++) {
                
                const fragBeginningRandom = [Math.floor(Math.random() * fragBeginning.length)];
                const fragMiddelRandom = [Math.floor(Math.random() * fragMiddle.length)];
                const fragEndRandom = [Math.floor(Math.random() * fragBeginning.length)];
                const fullQuote = [fragBeginning[fragBeginningRandom] + fragMiddle[fragMiddelRandom] + fragEnd[fragEndRandom]];
                quotes.push(fullQuote);

                fullQuote.forEach((item) => console.log(item));
            }
           
        } else {
            alert('Please enter and number between 1 and 5');
            randomFlowersQuotes()

        }
    }
    
    function quoteGenerator(type) {
        
        var type = prompt('For Animal Quotes Enter: 1\nFor Flowers Quotes Enter: 2\nTo Quit Enter: 0 \n\nEnter Choice');
        
        while (type !== '0') {
            switch (type) {
                case '1':
                randomAnimalQuotes();
                break;
                
                case '2':
                randomFlowersQuotes();
                break;
                
                default: alert('Invalid choice try again');
                
            }
            var type = prompt('For Animal Quotes Enter: 1\nFor Flowers Quotes Enter: 2\nTo Quit Enter: 0 \n\nEnter Choice');
            
        }
        if(type === '0') {
            alert('Have A Great Day, Good Bye.');
        }
        
    }
     //Initiating the programme
     
    quoteGenerator()

    ///END OF PROGRAMME ////
    
