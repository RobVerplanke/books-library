const submitButton = document.getElementById('submit-button');

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

function Book(title, author, genre, pages, read = '(un)read') {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const newTitle = document.getElementById('new-book-title').value;
  const newAuthor = document.getElementById('new-book-author').value;
  const newGenre = document.getElementById('new-book-author').value;
  const newPages = document.getElementById('new-book-author').value;

  const newBook = new Book(newTitle, newAuthor, newGenre, newPages);

  myLibrary.push(newBook);
}

submitButton.addEventListener('click', addBookToLibrary);

function showLibrary() {
  const bookContainer = document.getElementById('book-container');

  function createCard(title, author, genre, pages) {
    const libraryBook = document.createElement('div').classList.add('book');

    const libraryBookTitle = document.createElement('div').classList.add('book-title');
    const libraryBookAuthor = document.createElement('div').classList.add('book-author');
    const libraryBookGenre = document.createElement('div').classList.add('book-genre');
    const libraryBookPages = document.createElement('div').classList.add('book-pages');

    libraryBook.append(libraryBookTitle, libraryBookAuthor, libraryBookGenre, libraryBookPages);
    bookContainer.appendChild(libraryBook);
  }

  myLibrary.forEach((book) => {
    console.log(`test ${book}`);
    createCard(book.title, book.author, book.genre, book.pages);
  });
}

showLibrary();
