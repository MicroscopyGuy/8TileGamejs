import Board from '../src/Board.js';

const MAX_D = 3;

/********************************** possibleSwaps() ********************************************/
test('possibleSwaps() returns correct swaps on blank in top left', () => {
  let newBoard = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['down', 'right']);
});

test('possibleSwaps() returns correct swaps on blank in top middle', () => {
  let newBoard = new Board(['1', '_', '2', '3', '4', '5', '6', '7', '8'], 1, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['down', 'left', 'right']);
});

test('possibleSwaps() returns correct swaps on blank in top right', () => {
  let newBoard = new Board(['2', '1', '-', '3', '4', '5', '6', '7', '8'], 2, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['down', 'left']);
});

test('possibleSwaps() returns correct swaps on blank in middle left', () => {
  let newBoard = new Board(['3', '1', '2', '_', '4', '5', '6', '7', '8'], 3, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['up', 'down', 'right']);
});

test('possibleSwaps() returns correct swaps on blank in middle middle', () => {
  let newBoard = new Board(['4', '1', '2', '3', '_', '5', '6', '7', '8'], 4, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['up', 'down', 'left', 'right']);
});

test('possibleSwaps() returns correct swaps on blank in middle right', () => {
  let newBoard = new Board(['5', '1', '2', '3', '4', '_', '6', '7', '8'], 5, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['up', 'down', 'left']);
});

test('possibleSwaps() returns correct swaps on blank in bottom left', () => {
  let newBoard = new Board(['6', '1', '2', '3', '4', '5', '_', '7', '8'], 6, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['up', 'right']);
});

test('possibleSwaps() returns correct swaps on blank in bottom middle', () => {
  let newBoard = new Board(['7', '1', '2', '3', '4', '5', '6', '_', '8'], 7, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['up', 'left', 'right']);
});

test('possibleSwaps() returns correct swaps on blank in bottom right', () => {
  let newBoard = new Board(['8', '1', '2', '3', '4', '5', '6', '7', '_'], 8, null);
  let possibleSwaps = newBoard.possibleSwaps(MAX_D);
  expect(possibleSwaps).toEqual(['up', 'left']);
});

/******************************** end possibleSwaps() *******************************************/


/**************************************** swap() ************************************************/
test('swap() correctly swaps two board elements', () => {
  let newBoard = new Board(['8', '1', '2', '3', '4', '5', '6', '7', '_'], 8, null);
  newBoard.swap(0, 1);
  expect(newBoard.board).toEqual(['1', '8', '2', '3', '4', '5', '6', '7', '_']);
});
/************************************** end swap() *********************************************/

/************************************** swapBlank() ********************************************/
test('swapBlank() on blank in top left correctly swaps down and right', () => {
  let boardDown  = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0, null);
  let boardRight = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0, null);
  
  let boardDownExpected  = new Board(['3', '1', '2', '_', '4', '5', '6', '7', '8'], 3, null);
  let boardRightExpected = new Board(['1', '_', '2', '3', '4', '5', '6', '7', '8'], 1, null);

  boardDown.swapBlank("down", MAX_D);
  boardRight.swapBlank("right", MAX_D);

  expect(boardRight).toEqual(boardRightExpected);
  expect(boardDown).toEqual(boardDownExpected);
});

test('swapBlank() on blank in top middle correctly swaps down, left and right', () => {
  let boardDown  = new Board(['1', '_', '2', '3', '4', '5', '6', '7', '8'], 1, null);
  let boardLeft  = new Board(['1', '_', '2', '3', '4', '5', '6', '7', '8'], 1, null); 
  let boardRight = new Board(['1', '_', '2', '3', '4', '5', '6', '7', '8'], 1, null);
  
  let boardDownExpected  = new Board(['1', '4', '2', '3', '_', '5', '6', '7', '8'], 4, null);
  let boardLeftExpected  = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0, null);
  let boardRightExpected = new Board(['1', '2', '_', '3', '4', '5', '6', '7', '8'], 2, null);

  boardDown.swapBlank("down", MAX_D);
  boardLeft.swapBlank("left", MAX_D);
  boardRight.swapBlank("right", MAX_D);

  expect(boardLeft).toEqual(boardLeftExpected);
  expect(boardRight).toEqual(boardRightExpected);
  expect(boardDown).toEqual(boardDownExpected);
});




test('swapBlank() on blank in top right correctly swaps down and left', () => {
  //let boardUp    = new new Board(['1', '2', '_', '3', '4', '5', '6', '7', '8'], 2, null);
  let boardDown  = new Board(['1', '2', '_', '3', '4', '5', '6', '7', '8'], 2, null);
  let boardLeft  = new Board(['1', '2', '_', '3', '4', '5', '6', '7', '8'], 2, null); 
  //let boardRight = new Board(['1', '2', '_', '3', '4', '5', '6', '7', '8'], 2, null);

  //let boardUpExpected    = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0, null);
  let boardDownExpected  = new Board(['1', '2', '5', '3', '4', '_', '6', '7', '8'], 5, null);
  let boardLeftExpected  = new Board(['1', '_', '2', '3', '4', '5', '6', '7', '8'], 1, null);
  //let boardRightExpected = new Board(['1', '2', '_', '3', '4', '5', '6', '7', '8'], 2, null);

  //boardUp.swapBlank("up", MAX_D);
  boardDown.swapBlank("down", MAX_D);
  boardLeft.swapBlank("left", MAX_D);
  //boardRight.swapBlank("right", MAX_D);

  //expect(boardUp).toEqual(boardUpExpected);
  expect(boardLeft).toEqual(boardLeftExpected);
  //expect(boardRight).toEqual(boardRightExpected);
  expect(boardDown).toEqual(boardDownExpected);
});

test('swapBlank() on blank in middle left correctly swaps up, down, and right', () => {
  let boardUp    = new Board(['3', '1', '2', '_', '4', '5', '6', '7', '8'], 3, null);
  let boardDown  = new Board(['3', '1', '2', '_', '4', '5', '6', '7', '8'], 3, null);
  let boardRight = new Board(['3', '1', '2', '_', '4', '5', '6', '7', '8'], 3, null);
                                     
  let boardUpExpected    = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0, null);
  let boardRightExpected = new Board(['3', '1', '2', '4', '_', '5', '6', '7', '8'], 4, null);
  let boardDownExpected  = new Board(['3', '1', '2', '6', '4', '5', '_', '7', '8'], 6, null);
  //let boardRightExpected = new Board(['3', '1', '2', '4', '_', '5', '6', '7', '8'], 4, null);

  boardUp.swapBlank("up", MAX_D);
  boardDown.swapBlank("down", MAX_D);
  boardRight.swapBlank("right", MAX_D);

  expect(boardUp).toEqual(boardUpExpected);
  expect(boardRight).toEqual(boardRightExpected);
  expect(boardDown).toEqual(boardDownExpected);
});

test('swapBlank() on blank in middle middle correctly swaps up, down, left and right', () => {
  let boardUp    = new Board(['3', '1', '2', '4', '_', '5', '6', '7', '8'], 4, null);
  let boardDown  = new Board(['3', '1', '2', '4', '_', '5', '6', '7', '8'], 4, null);
  let boardLeft  = new Board(['3', '1', '2', '4', '_', '5', '6', '7', '8'], 4, null);
  let boardRight = new Board(['3', '1', '2', '4', '_', '5', '6', '7', '8'], 4, null);
                                     
  let boardUpExpected    = new Board(['3', '_', '2', '4', '1', '5', '6', '7', '8'], 1, null);
  let boardRightExpected = new Board(['3', '1', '2', '4', '5', '_', '6', '7', '8'], 5, null);
  let boardLeftExpected  = new Board(['3', '1', '2', '_', '4', '5', '6', '7', '8'], 3, null);
  let boardDownExpected  = new Board(['3', '1', '2', '4', '7', '5', '6', '_', '8'], 7, null);

  boardUp.swapBlank("up", MAX_D);
  boardDown.swapBlank("down", MAX_D);
  boardLeft.swapBlank("left", MAX_D);
  boardRight.swapBlank("right", MAX_D);

  expect(boardUp).toEqual(boardUpExpected);
  expect(boardRight).toEqual(boardRightExpected);
  expect(boardDown).toEqual(boardDownExpected);
  expect(boardLeft).toEqual(boardLeftExpected);
});

test('swapBlank() on blank in middle right correctly swaps up, down, and left and right', () => {
  let boardUp    = new Board(['3', '1', '2', '4', '5', '_', '6', '7', '8'], 5, null);
  let boardDown  = new Board(['3', '1', '2', '4', '5', '_', '6', '7', '8'], 5, null);
  let boardLeft  = new Board(['3', '1', '2', '4', '5', '_', '6', '7', '8'], 5, null);
                                     
  let boardUpExpected    = new Board(['3', '1', '_', '4', '5', '2', '6', '7', '8'], 2, null);
  let boardLeftExpected  = new Board(['3', '1', '2', '4', '_', '5', '6', '7', '8'], 4, null);
  let boardDownExpected  = new Board(['3', '1', '2', '4', '5', '8', '6', '7', '_'], 8, null);

  boardUp.swapBlank("up", MAX_D);
  boardDown.swapBlank("down", MAX_D);
  boardLeft.swapBlank("left", MAX_D);

  expect(boardUp).toEqual(boardUpExpected);
  expect(boardDown).toEqual(boardDownExpected);
  expect(boardLeft).toEqual(boardLeftExpected);
});

test('swapBlank() on blank in bottom left correctly swaps up and right', () => {
  let boardUp   = new Board(['3', '1', '2', '4', '5', '6', '_', '7', '8'], 6, null);
  let boardRight = new Board(['3', '1', '2', '4', '5', '6', '_', '7', '8'], 6, null);
                                     
  let boardUpExpected    = new Board(['3', '1', '2', '_', '5', '6', '4', '7', '8'], 3, null);
  let boardRightExpected = new Board(['3', '1', '2', '4', '5', '6', '7', '_', '8'], 7, null);

  boardUp.swapBlank("up", MAX_D);
  boardRight.swapBlank("right", MAX_D);

  expect(boardUp).toEqual(boardUpExpected);
  expect(boardRight).toEqual(boardRightExpected);
});

test('swapBlank() on blank in bottom middle correctly swaps up, left and right', () => {
  let boardUp    = new Board(['3', '1', '2', '4', '5', '6', '7', '_', '8'], 7, null);
  let boardLeft  = new Board(['3', '1', '2', '4', '5', '6', '7', '_', '8'], 7, null);
  let boardRight = new Board(['3', '1', '2', '4', '5', '6', '7', '_', '8'], 7, null);
                                  
  let boardUpExpected    = new Board(['3', '1', '2', '4', '_', '6', '7', '5', '8'], 4, null);
  let boardLeftExpected  = new Board(['3', '1', '2', '4', '5', '6', '_', '7', '8'], 6, null);
  let boardRightExpected = new Board(['3', '1', '2', '4', '5', '6', '7', '8', '_'], 8, null);

  boardUp.swapBlank("up", MAX_D);
  boardLeft.swapBlank("left", MAX_D);
  boardRight.swapBlank("right", MAX_D);

  expect(boardUp).toEqual(boardUpExpected);
  expect(boardLeft).toEqual(boardLeftExpected);
  expect(boardRight).toEqual(boardRightExpected);
});

test('swapBlank() on blank in bottom right correctly swaps up and left', () => {
  let boardUp    = new Board(['3', '1', '2', '4', '5', '6', '7', '8', '_'], 8, null);
  let boardLeft  = new Board(['3', '1', '2', '4', '5', '6', '7', '8', '_'], 8, null);
                                  
  let boardUpExpected    = new Board(['3', '1', '2', '4', '5', '_', '7', '8', '6'], 5, null);
  let boardLeftExpected  = new Board(['3', '1', '2', '4', '5', '6', '7', '_', '8'], 7, null);

  boardUp.swapBlank("up", MAX_D);
  boardLeft.swapBlank("left", MAX_D);

  expect(boardUp).toEqual(boardUpExpected);
  expect(boardLeft).toEqual(boardLeftExpected);
});












