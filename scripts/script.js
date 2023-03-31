const addButton = document.getElementById('submit-button');

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

function resetForm(newTitle, newAuthor, bookGenre, bookPages, bookRead) {
  newTitle.value = '';
  newAuthor.value = '';
  bookGenre.value = '';
  bookPages.value = '';
  bookRead.value = '';
}

function addBookToLibrary() {
  const newTitle = document.getElementById('new-book-title');
  const newAuthor = document.getElementById('new-book-author');
  const bookGenre = document.getElementById('new-book-genre');
  const bookPages = document.getElementById('new-book-pages');
  const bookRead = document.getElementById('submit-button');

  // create new object
  // eslint-disable-next-line max-len
  const newBook = new Book(newTitle.value, newAuthor.value, bookGenre.value, bookPages.value, bookRead.value);

  // add object to array
  myLibrary.push(newBook);
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  resetForm(newTitle, newAuthor, bookGenre, bookPages, bookRead);

  console.log(`${myLibrary.length}`);
}

addButton.addEventListener('click', addBookToLibrary);

// function removeBook() {

// }

// function showLibrary() {
//   // create new card
//   const book = document.createElement('div');
//   book.classList.add('book');

//   // create new card elements
//   const bookTitle = document.createElement('div');
//   const bookAuthor = document.createElement('div');
//   const bookGenre = document.createElement('div');
//   const bookPages = document.createElement('div');
//   const bookRead = document.createElement('div');
//   const bookRemove = document.createElement('button');

//   // add classes
//   bookTitle.classList.add('book-title');
//   bookAuthor.classList.add('book-author');
//   bookGenre.classList.add('book-genre');
//   bookPages.classList.add('book-pages');
//   bookRead.classList.add('book-read');
//   bookRemove.classList.add('book-delete');

//   bookRemove.addEventListener('click', () => removeBook());

//   // add elements to main card
//   book.append(bookTitle, bookAuthor, bookGenre, bookPages, bookRead, bookRemove);

//   // add card to book container
//   bookContainer.appendChild(book);
// }
