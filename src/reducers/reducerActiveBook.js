// `state` argument does NOT refer to entire application state
// It refers to only the piece of `state` this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
