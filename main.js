var historicalQuotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        name: "― Oscar Wilde"

    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        name: "― Marilyn Monro"
    },
    {
        quote: "“So many books, so little time.”",
        name: "― Frank Zappa"

    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        name: "― Bernard M. Baruch"

    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        name: "― Dr. Seuss"

    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        name: "― Mae West"

    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        name: "― Mahatma Gandhi"

    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        name: "― Robert Frost"

    },
    {
        quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        name: "― J.K. Rowling, Harry Potter and the Goblet of Fire"

    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        name: "― Mark Twain"

    },
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        name: "― Elbert Hubbard"

    },
    {
        quote: "“Without music, life would be a mistake.”",
        name: "― Friedrich Nietzsche, Twilight of the Idols"

    }
]
var lastIndex = -44
var randomQuote
function newQuote() {
    do {
    randomQuote = Math.floor(Math.random() * historicalQuotes.length);
    }
    while (
        lastIndex === randomQuote
    )
    document.getElementById("words").innerHTML = historicalQuotes[randomQuote].quote;
    document.getElementById("owner").innerHTML = historicalQuotes[randomQuote].name;
    lastIndex = randomQuote;

}