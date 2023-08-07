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
      image: "romance_image_url_1.jpg",
      genre: "romance",
    },
    {
      quote: "Romance Quote 2",
      image: "romance_image_url_2.jpg",
      genre: "romance",
    },
    // Add more objects with quotes, image URLs, and genres as needed
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
  