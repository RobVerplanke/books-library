const addButton = document.getElementById('add-button');
const bookContainer = document.getElementById('book-container');
const formContainer = document.getElementById('form-container');
const submitButton = document.getElementById('submit-button');

const myLibrary = [
  {
    title: 'The Secret Life of Clouds', author: 'Skyler Rain', pages: 342, genre: 'Romance', read: false,
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
];

// Create function constructor of a book
function Book(title, author, genre, pages, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
  this.remove = function () {

  };
}

// Remove all books from display
const resetLibrary = () => { bookContainer.textContent = ''; };

// Make 'add book form' visible
const showForm = () => {
  formContainer.classList.remove('form-container-disabled');
  formContainer.classList.add('form-container-enabled');
};

// Hide 'add book form'

const hideForm = () => {
  formContainer.classList.remove('form-container-enabled');
  formContainer.classList.add('form-container-disabled');
};

// Create message for each read status
const convertReadStatus = (status) => {
  if (status === false) {
    return 'Not read yet';
  } if (status === true) {
    return 'Read';
  }
};

// Show all books in library array
const showLibrary = () => {
  // Create a 'book card' and its elements
  const createCard = (title, author, genre, pages, read) => {
    const libraryBook = document.createElement('div');
    const libraryBookTitle = document.createElement('div');
    const libraryBookAuthor = document.createElement('div');
    const libraryBookGenre = document.createElement('div');
    const libraryBookPages = document.createElement('div');
    const libraryBookReadStatus = document.createElement('div');
    const toggleLabel = document.createElement('label');
    const toggleCheckbox = document.createElement('input');
    const toggleSpan = document.createElement('span');
    const removeContainer = document.createElement('div');
    const libraryBookRemove = document.createElement('button');

    // Add classes to all elements
    libraryBook.classList.add('book');
    libraryBookTitle.classList.add('book-title');
    libraryBookAuthor.classList.add('book-author');
    libraryBookGenre.classList.add('book-genre');
    libraryBookPages.classList.add('book-pages');
    libraryBookReadStatus.classList.add('book-read-status');
    toggleLabel.classList.add('switch');
    toggleCheckbox.classList.add('read-toggle');
    toggleCheckbox.type = 'checkbox';
    toggleCheckbox.id = 'read-toggle-box';
    toggleSpan.classList.add('slider', 'round');
    removeContainer.classList.add('remove-container');
    libraryBookRemove.id = 'book-delete-button';

    // Add content to all elements
    libraryBookTitle.textContent = title;
    libraryBookAuthor.textContent = author;
    libraryBookGenre.textContent = (`Genre: ${genre}`);
    libraryBookPages.textContent = (`${pages} pages`);
    libraryBookReadStatus.textContent = convertReadStatus(read);
    libraryBookRemove.textContent = 'Remove';

    // Adjust slider to read status
    if (read === false) {
      toggleCheckbox.checked = false;
    } if (read === true) {
      toggleCheckbox.checked = true;
    }

    toggleLabel.append(toggleCheckbox, toggleSpan);
    removeContainer.append(libraryBookRemove);

    // Add event listener
    // If user toggles the read/unread slider, change read status message
    toggleCheckbox.addEventListener('click', () => {
      if (toggleCheckbox.checked === true) {
        console.log(`read true: ${read}`);
        libraryBookReadStatus.textContent = convertReadStatus(toggleCheckbox.checked);
      } if (toggleCheckbox.checked === false) {
        console.log(`read false: ${read}`);
        libraryBookReadStatus.textContent = convertReadStatus(toggleCheckbox.checked);
      }

      // And update the book's property value of 'read' status in array
      // Under construction
    });

    // Remove book from library
    // Under construction
    libraryBookRemove.addEventListener('click', () => {
      console.log('remove');
    });

    // Add content in containers
    // eslint-disable-next-line max-len
    libraryBook.append(libraryBookTitle, libraryBookAuthor, libraryBookGenre, libraryBookPages, toggleLabel, libraryBookReadStatus, libraryBookRemove);
    bookContainer.appendChild(libraryBook);
  };

  // Create a 'book card' for each book in the library array
  // eslint-disable-next-line max-len
  myLibrary.forEach((book) => createCard(book.title, book.author, book.genre, book.pages, book.read));
};

// Let user add a new book to the library array
const addBookToLibrary = () => {
  // Get user input
  const newTitle = document.getElementById('new-book-title');
  const newAuthor = document.getElementById('new-book-author');
  const newGenre = document.getElementById('new-book-genre');
  const newPages = document.getElementById('new-book-pages');
  const newReadStatus = document.getElementById('read-toggle-box').checked;

  // Set new object property values
  const newBook = Object.create(Book);
  newBook.title = newTitle.value;
  newBook.author = newAuthor.value;
  newBook.genre = newGenre.value;
  newBook.pages = newPages.value;
  newBook.read = newReadStatus;

  // Add new object with its new values to the library array
  myLibrary.push(newBook);

  // change submit button behavior
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();

  // Reset app after new input
  hideForm();
  resetLibrary();
  showLibrary();

  newTitle.value = '';
  newAuthor.value = '';
  newGenre.value = '';
  newPages.value = '';
};

// Add event listeners
addButton.addEventListener('click', showForm);
submitButton.addEventListener('click', addBookToLibrary);

// Initialize app
showLibrary();
