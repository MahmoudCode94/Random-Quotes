var quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    writer: "- Oscar Wilde",
  },
  {
    text: "So many books, so little time",
    writer: "- Frank Zappa",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    writer: "- Albert Einstein",
  },
  {
    text: "A room without books is like a body without a soul.",
    writer: "- Marcus Tullius Cicero",
  },
  {
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    writer: "- Dr. Seuss",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    writer: "- Mae West",
  },
  {
    text: "Be the change that you wish to see in the world.",
    writer: "- Mahatma Gandhi",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    writer: "- Robert Frost",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    writer: "- Mark Twain",
  },
];

var lastIndex = -1;
function getQuote() {
  var x;
  do {
    x = Math.floor(Math.random() * quotes.length);
  } while (x === lastIndex);
  lastIndex = x;
  document.getElementById("quote").innerHTML = quotes[x].text;
  document.getElementById("writer").innerHTML = quotes[x].writer;
}
