const quotesWithImages = [
    {
      quote: "Fantasy Quote 1",
      image: "fantasy_image_url_1.jpg",
      genre: "fantasy",
    },
    {
      quote: "Fantasy Quote 2",
      image: "fantasy_image_url_2.jpg",
      genre: "fantasy",
    },
    {
      quote: "Inspirational Quote 1",
      image: "inspirational_image_url_1.jpg",
      genre: "inspirational",
    },
    {
      quote: "Inspirational Quote 2",
      image: "inspirational_image_url_2.jpg",
      genre: "inspirational",
    },
    {
      quote: "Romance Quote 1",
      image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\Adalyn Grace, Belladonna.png",
      genre: "romance",
    },
    {
      quote: "Romance Quote 2",
      image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\Ali Hazelwood Love Hypothisis1.png",
      genre: "romance",
    },
    {
        quote: "Romance Quote 3",
        image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\Ali Hazelwood, The Love Hypothesis2.png",
        genre: "romance",
      },
      {
        quote: "Romance Quote 4",
        image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\Casey McQuiston, Red, White and Royal Blue.png",
        genre: "romance",
      },{
        quote: "Romance Quote 5",
        image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\Jude Deveraux, A Knight in Shining Armor.png",
        genre: "romance",
      },{
        quote: "Romance Quote 6",
        image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\Kelly Andrew, The Whispering Dark.png",
        genre: "romance",
      },{
        quote: "Romance Quote 7",
        image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\Nicholas Sparks, Message in a Bottle.png",
        genre: "romance",
      },{
        quote: "Romance Quote 8",
        image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\Sarah Mayberry, Her Best Friend.png",
        genre: "romance",
      },{
        quote: "Romance Quote 9",
        image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\V.E. Schwab, The Invisible Life of Addie LaRue.png",
        genre: "romance",
      },{
        quote: "Romance Quote 10",
        image: "C:\Users\Admin\Documents\GitHub\CFG_Project\img\William Shakespear Romeo&Julitte.png",
        genre: "romance",
      },
  ];

  function getRandomImageByGenre(genre) {
    const filteredQuotes = quotesWithImages.filter((quoteData) => {
      return quoteData.genre === genre;
    });
  
    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      return filteredQuotes[randomIndex].image;
    }
  
    // Return a default image URL if no quotes found for the selected genre
    return "default_image_url.jpg";
  }
  
  function generateQuote(genre) {
    const image = getRandomImageByGenre(genre);
    document.getElementById("quoteImage").src = image;
  
    // Toggle the class to open/close the book
    const quoteBook = document.querySelector(".quote-book");
    quoteBook.classList.toggle("open-book");
  }
  