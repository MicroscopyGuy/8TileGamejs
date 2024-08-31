import Board from "./Board.js";

const MAX_D = 3;

/*
const board = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0);
board.swapBlank('down', MAX_D);
console.log(board.toString());
console.log(board.PossibleSwaps(MAX_D));
*/

const goalState = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0, null);
const goalStateStringified = goalState.toString();
const initialState = new Board(['8', '7', '6', '5', '4', '3', '2', '1', '_'], 8);
var fringe = [].push(initialState);
console.log(fringe);
var explored = new Set();
explored.add(initialState.toString());
var pathFound = false;


while (fringe.length > 0 && !pathFound){
    exploring = fringe.shift();
    let possibleSwaps = exploring.possibleSwaps(MAX_D);

    // if a new board state
    if (!exploring.has(exploring.toString())){
        
        if (exploring.ToString() === goalStateStringified){
            console.log("Success!");
            pathFound = true;
            console.log(exploring.path);
        }

        // make all possible swaps to the board states, and add them to the fringe container
        // as new states that have references to the parent (called exploring)
        for (var i = 0; i < possibleSwaps.length; i++){
            let newNode = Board(exploring.board, exploring.blankIndex, exploring);
            newNode.swapBlank(possibleSwaps[i]);
            fringe.push(newNode);
        }
    }
}
if (!pathFound){
    console.log("Failure. No path found.");
}
console.log(`Unique states encountered: ${explored.length}`);

