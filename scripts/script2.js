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

function Book(title, author, genre, pages, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
  this.remove = function () {
  };
}

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

function showLibrary() {
  bookContainer.innerHTML = '';

  // Create a new card with all its elements for each book in the library array
  myLibrary.forEach((book, index) => {
    const libraryBook = document.createElement('div');
    const libraryBookTitle = document.createElement('div');
    const libraryBookAuthor = document.createElement('div');
    const libraryBookGenre = document.createElement('div');
    const libraryBookPages = document.createElement('div');
    const toggleLabel = document.createElement('label');
    const toggleSpan = document.createElement('span');
    const readCheckbox = document.createElement('input');
    const readStatus = document.createElement('div');
    const libraryBookRemove = document.createElement('button');

    libraryBook.classList.add('book');
    libraryBookTitle.classList.add('book-title');
    libraryBookAuthor.classList.add('book-author');
    libraryBookGenre.classList.add('book-genre');
    libraryBookPages.classList.add('book-pages');
    readCheckbox.type = 'checkbox';
    readCheckbox.checked = book.read;
    toggleLabel.classList.add('switch');
    toggleSpan.classList.add('slider', 'round');
    readStatus.classList.add('book-read-status');
    libraryBookRemove.id = 'book-delete-button';
    libraryBookRemove.textContent = 'Remove';

    libraryBook.dataset.index = index;

    libraryBookTitle.textContent = book.title;
    libraryBookAuthor.textContent = book.author;
    libraryBookGenre.textContent = book.genre;
    libraryBookPages.textContent = `${book.pages} pages`;
    readStatus.textContent = convertReadStatus(book.read);

    // Add event listeners to the checkbox/slider and the remove button
    readCheckbox.addEventListener('change', function () {
      myLibrary[index.read] = this.checked;
      readStatus.textContent = convertReadStatus(this.checked);
    });

    libraryBookRemove.addEventListener('click', () => {
      const confirmation = window.confirm(`Are you sure to delete: ${book.title}`);

      if (confirmation) {
        myLibrary.splice(index, 1);
        showLibrary();
      }
    });

    // eslint-disable-next-line max-len
    libraryBook.append(libraryBookTitle, libraryBookAuthor, libraryBookGenre, libraryBookPages, toggleLabel, readStatus, libraryBookRemove);
    toggleLabel.append(readCheckbox, toggleSpan);
    bookContainer.appendChild(libraryBook);
  });
}

const addBookToLibrary = () => {
  // Get user input
  const newTitle = document.getElementById('new-book-title');
  const newAuthor = document.getElementById('new-book-author');
  const newGenre = document.getElementById('new-book-genre');
  const newPages = document.getElementById('new-book-pages');
  const newRead = document.getElementById('read-toggle-box');

  // Set new object property values
  const newBook = Object.create(Book);
  newBook.title = newTitle.value;
  newBook.author = newAuthor.value;
  newBook.genre = newGenre.value;
  newBook.pages = newPages.value;
  newBook.read = newRead.checked;

  // Add new object with its new values to the library array
  myLibrary.push(newBook);

  // change submit button behavior
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();

  // Reset form after new input
  hideForm();

  newTitle.value = '';
  newAuthor.value = '';
  newGenre.value = '';
  newPages.value = '';
  newRead.checked = false;

  // Show updated library
  showLibrary();
};

// Add event listeners
addButton.addEventListener('click', showForm);
submitButton.addEventListener('click', addBookToLibrary);

// Initially show all books from library array
showLibrary();
