// Refactor Global Variables Out of Functions

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr, bookName) {
  const newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

function remove (arr, bookName) {
  const newArr = [...arr];
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {
    newArr.splice(book_index, 1);
    return newArr;
  }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);