/******************************************
 *****************************************/

/***
 * `quotes` array
 ***/
var quotes = []; //setting array

// setting objects
var Quote1 = {
  quote:
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  source: "Nelson Mandela",
};
var Quote2 = {
  quote: "The way to get started is to quit talking and begin doing.",
  source: "Walt Disney",
  citation: "Random Disney Movie",
  year: "2013",
};
var Quote3 = {
  quote:
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",
  source: "Steve Jobs",
  year: "2008",
};
var Quote4 = {
  quote:
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: "Oprah Winfrey",
};
var Quote5 = {
  quote: "When you reach the end of your rope, tie a knot in it and hang on.",
  source: "Franklin D. Roosevelt",
  year: "1890",
};

//pushing all objects into the quotes array
quotes.push(Quote1, Quote2, Quote3, Quote4, Quote5);

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length); // math method to get a random number
  var randomQuote = quotes[randomNumber]; //getting a random quote using random number

  return randomQuote; //returning random quote
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  let randomQuote = getRandomQuote(); //calling randomQuote function and setting it to a var
  var htmlString = //creating a html string and setting the new elements into it
    "<p class='quote'>" +
    randomQuote.quote +
    "</p>" +
    "<p class='source'>" +
    randomQuote.source;

  // creating if statements to concatenate the citation and year properties if they are present within the selected object
  if ("citation" in randomQuote == true) {
    htmlString += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  if ("year" in randomQuote == true) {
    htmlString += "<span class='year'>" + randomQuote.year + "</span>";
  }

  htmlString += "</p>";

  return (document.getElementById("quote-box").innerHTML = htmlString); //returning the newely edited html string into the "Quote Box" elemement within the HTML file
}

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById("load-quote").addEventListener("click", function () {
  printQuote(); //event listener that calls the print quote function when pressed.
});
