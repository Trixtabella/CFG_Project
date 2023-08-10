const quotes = {
  fantasy: [
    { quote: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.", author: "George R.R. Martin", book: "A Game of Thrones" },
    { quote: "Bones mend. Regret stays with you forever.", author: "Patrick Rothfuss", book: "The Name of the Wind" },
    { quote: "The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step.", author: "Brandon Sanderson", book: "Oathbringer" },
    { quote: "All we have to decide is what to do with the time that is given us.", author: "J.R.R. Tolkien", book: "The Fellowship of the Ring" },
    { quote: "Libraries were full of ideas—perhaps the most dangerous and powerful of all weapons.", author: "Sarah J Maas", book: "Throne of Glass" },
    { quote: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling", book: "Harry Potter and the Philosopher's Stone" },
    { quote: "No woman should be made to fear that she was not enough.", author: "Samantha Shannon", book: "Priory of the Orange Tree" },
    { quote: "War doesn't determine who's right. War determines who remains.", author: "R.F. Kuang", book: "The Poppy War" },
    { quote: "Put a man in a room for a hundred years with a thousand books, and he'll know a million truths. Put him in a room for a year with silence, and he'll know himself.", author: "Jay Kristoff", book: "Empire of the Vampire" },
    { quote: "Humbling women seems to me a chief pastime of poets. As if there can be no story unless we crawl and weep.", author: "Madeline Miller", book: "Circe" },
  ],
 selfImprovement: [
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", title: "" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", title: "" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", title: "" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost", title: "" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt", book: "" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky", book: "" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", book: "" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", book: "" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela", book: "" },
    { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer", title: "" },
    { quote: "We all need goals to challenge ourselves and give us a sense of purpose; we are at our best when we're striving for something bigger than ourselves.", author: "Tyson Fury", book: "The Furious Method" },
    { quote: "You can drop an awful lot of excess baggage if you learn to play with life instead of fight it.", author: "Susan Jeffers", book: "Feel The Fear And Do It Anyway" },
    { quote: "Everybody in the world is seeking happiness-and there is one sure way to find it. That is by controlling your thoughts. Happiness doesn't depend on outward conditions. It depends on inner conditions.", author: "Dale Carnegie", book: "How to Win Friends & Influence People" },
    { quote: "Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character, sow a character, reap a destiny.", author: "Stephen R. Covey", book: "The 7 Habits of Highly Effective People" },
    { quote: "When defeat comes, accept it as a signal that your plans are not sound, rebuild those plans, and set sail once more toward your coveted goal.", author: "Napoleon Hill", book: "Think and Grow Rich" },
    { quote: "Any action is often better than no action, especially if you have been stuck in an unhappy situation for a long time. If it is a mistake, at least you learn something, in which case it's no longer a mistake. if you remain stuck, you learn nothing.", author: "Eckhart Tolle", book: "The Power of Now: A guide to Spiritual Enlightenment" },
    { quote: "What a caterpillar calls the end of the world, we call a butterfly.", author: "Eckhart Tolle", book: "The Power of Now: A guide to Spiritual Enlightenment" },
    { quote: "Life's too short to play small with your talents.", author: "Robin Sharma", book: "The 5 AM Club" },
    { quote: "Whether you think you can or think you can't, you're right.", author: "Jack Canfield", book: "Chicken Soup for the Soul" },
    { quote: "If you dont set a baseline standard for what youll accept in your life, youll find its easy to slip into behaviors and attitudes or a quality of life thats far below what you deserve. You need to set and live by these standards no matter what happens in your life.", author: "Tony Robbins", book: "Awaken the Giant Within" },
  ],
  romance: [
    { quote: "I'm starting to wonder if this is what being in love is. Being okay with ripping yourself to shreds, so the other person can stay whole.", author: "Ali Hazelwood", book: "The Love Hypothesis" },
    { quote: "True love is rare, and it's the only thing that gives life real meaning.", author: "Nicholas Sparks", book: "Message in a Bottle" },
    { quote: "My soul will find yours.", author: "Jude Deveraux", book: "A Knight in Shining Armor" },
    { quote: "I will never not find you, Delaney. I can't help it. I follow where you lead.", author: "Kelly Andrew", book: "The Whispering Dark" },
    { quote: "thus with a kiss I die", author: "William Shakespeare", book: "Romeo and Juliet" },
    { quote: "That's the choice. I love him, with all that, because of all that. On purpose. I love him on purpose.", author: "Casey McQuiston", book: "Red, White & Royal Blue" },
    { quote: "You can fall in love: someone will catch you.", author: "Ali Hazelwood", book: "The Love Hypothesis" },
    { quote: "She was an idiot. An adorable, gorgeous, feisty, funny, sweet, sexy idiot.", author: "Sarah Mayberry", book: "Her Best Friend" },
    { quote: "His heart has a draft. It lets in light. It lets in storms. It lets in everything.", author: "V.E. Schwab", book: "The Invisible Life of Addie LaRue" },
    { quote: "He laughed. The sound was low and melodic, and it had his shadows writhing. “Your name is no curse, Little Bird. I just like the taste of it.", author: "Adalyn Grace", book: "Belladonna" },
  ],
};

function generateQuote(genre) {
  const genreQuotes = quotes[genre];
  const randomIndex = Math.floor(Math.random() * genreQuotes.length);
  const quote = genreQuotes[randomIndex];
  document.getElementById("quote").textContent = quote.quote;
  document.getElementById("author").textContent = `- ${quote.author}`;
  document.getElementById("book").textContent = quote.book ? `- ${quote.book}` : "";
}

document.getElementById("fantasyBtn").addEventListener("click", function () {
  generateQuote("fantasy");
});

document.getElementById("selfImprovementBtn").addEventListener("click", function () {
  generateQuote("selfImprovement");
});

document.getElementById("romanceBtn").addEventListener("click", function () {
  generateQuote("romance");
});

const addButtons = document.getElementsByClassName("plus-button");
const quoteDisplay = document.getElementById('quoteDisplay');

function saveGeneratedQuote(quote) {
  const quoteContainer = document.createElement('div');
  quoteContainer.classList.add('saved-quote');

  const savedQuoteParagraph = document.createElement('p');
  savedQuoteParagraph.textContent = `"${quote}"`;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');

  quoteContainer.appendChild(savedQuoteParagraph);
  quoteContainer.appendChild(removeButton);
  quoteDisplay.appendChild(quoteContainer);

  removeButton.addEventListener('click', () => {
    quoteContainer.remove();
    
    const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    const updatedSavedQuotes = savedQuotes.filter(q => q !== quote);
    localStorage.setItem('savedQuotes', JSON.stringify(updatedSavedQuotes));
  });
}

function loadSavedQuotes() {
  const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];

  for (const savedQuote of savedQuotes) {
    saveGeneratedQuote(savedQuote);
  }
}

for (const addButton of addButtons) {
  addButton.addEventListener('click', () => {
    const generatedQuote = document.getElementById("quote").textContent;
    if (generatedQuote.trim() !== '') {
      saveGeneratedQuote(generatedQuote);
      
      const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
      savedQuotes.push(generatedQuote);
      localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
    }
  });
}

window.addEventListener('load', loadSavedQuotes);