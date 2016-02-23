export default function createStore(initialState) {
  let currentState = initialState;

  function getState() {
    return currentState;
  }

  return {
    getState
  };
}
