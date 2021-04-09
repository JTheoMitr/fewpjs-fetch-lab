function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    h3.innerHTML = book.authors;
    main.appendChild(h3);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
