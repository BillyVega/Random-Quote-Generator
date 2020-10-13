/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Create an array of objects displaying famous quotes. Add a citation and year to a couple of them. 
***/
let quotes = [

  {quote: "You must love your neighbor as yourself", source: 'The Bible', citation: 'Matthew 22:39'},
  {quote: "I've grown to be an old man and I've known many troubles...Most of them never happened", source: "Mark Twain", },
  {quote: "If you cannot do great things, do small things in a great way.", source: "Napolean Hill"},
  {quote: "Jobs’s greatest creation isn’t any Apple product. It is Apple itself.", source: "John Gruber", year: 2011},
  {quote: "All our dreams can come true if we have the courage to pursue them", source: "Walt Disney"},
  {quote: "Its kind of fun to do the impossible!", source: "Mickey Mouse", location: "Disneyland"},
  {quote: "Do, or Do not. There is no try", source: "Yoda", year: 1982},
  {quote: "You miss 100% of the shots you don’t take.", source: "Wayne Gretzky"},

];


/***
 * Create a random Quote function that will allow to randomly grab the index of each object inside the array. 
 * return the random index and display the quote associated with that index. 
***/
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * Object.keys(quotes).length);
  for (let prop in quotes){
  }
  return(quotes[randomNumber])
};


/***
 * Create a print quote function and assign a variable to the getRandomQuote func
 * check to see if the words citation and year are in the object concanate them to the variable. 
***/
function printQuote () {
  let randomQuote = getRandomQuote();
  let htmlString = `<p class="quote">${randomQuote.quote} <p class="source">${randomQuote.source}`
    if ('citation' in randomQuote === true){
      htmlString = `${htmlString}   <span class="citation">${randomQuote.citation}</span>`
    } else if ('year' in randomQuote === true){
      htmlString = `${htmlString}   <span class="year">${randomQuote.year}</span>`
    } else if ('location' in randomQuote === true) {
      htmlString = `${htmlString}   <span class="citation">${randomQuote.location}</span>`
    } else 
    htmlString = `${htmlString} </p>`
    return document.getElementById('quote-box').innerHTML = htmlString, 
    document.body.style.backgroundColor = randomColor();
    
  };

/***  
 * Create a function that replaces the background color with an imnage
***/

function randomColor() {
  let randomVal1 = Math.floor(Math.random() * 256);
  let randomVal2 = Math.floor(Math.random() * 256);
  let randomVal3 = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${randomVal1}, ${randomVal2},${randomVal3})`;  
  return(bgColor);

  
  };

  /***
   * create a timing interval function that auto refreshes the quote every 10 seconds
   */
setInterval(printQuote,10000);








/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote,  false);