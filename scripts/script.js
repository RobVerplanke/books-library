const bookTitle = document.getElementsByClassName('book-title');
const bookAuthor = document.getElementsByClassName('book-author');
const bookGenre = document.getElementsByClassName('book-genre');
const bookPages = document.getElementsByClassName('book-pages');

const myLibrary = [
  {
    title: 'The Time Traveler\'s Magic', author: 'Luna Blackwood', pages: 280, genre: 'Fantasy', read: true,
  },
  {
    title: 'The Secret Life of Clouds', author: 'Skyler Rain', pages: 342, genre: 'Romance', read: false,
  },
  {
    title: 'The Quantum Detective', author: 'Nova Starr', pages: 412, genre: 'Science Fiction', read: true,
  },
  {
    title: 'The Invisible City', author: 'Avery Shadow', pages: 240, genre: 'Mystery', read: false,
  },
  {
    title: 'The Midnight Library', author: 'Eve Nightingale', pages: 326, genre: 'Contemporary Fiction', read: true,
  },
  {
    title: 'The Mermaid\'s Curse', author: 'Marina Ocean', pages: 198, genre: 'Young Adult', read: true,
  },
  {
    title: 'The Witch\'s Almanac', author: 'Willow Moonstone', pages: 160, genre: 'Non-fiction', read: false,
  },
  {
    title: 'The Lost City of Atlantis', author: 'Leo Oceanus', pages: 294, genre: 'Historical Fiction', read: true,
  },
  {
    title: 'The Dragon\'s Hoard', author: 'Draco Flameheart', pages: 412, genre: 'Fantasy', read: false,
  },
  {
    title: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot', pages: 386, genre: 'Biography', read: true,
  },
];

function Book(title, author, genre, pages, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // get user input
  // create new object
  // add new object to array
}

function showAllBooks() {

}

const book1 = new Book('The Dragon\'s Hoard 2', 'Draco Flameheart', 412, false);
