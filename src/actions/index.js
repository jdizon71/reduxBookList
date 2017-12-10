export function selectBook(book) {
  // selectBook() is an action creator that need to return an action, a plain JS object with a `type` property
  return {
    type: 'BOOK_SELECTED', // usually, we'd want to use constants to reference types
    payload: book
  }
}
