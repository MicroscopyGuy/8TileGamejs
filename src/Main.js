import Board from "./Board.js";

const MAX_D = 3;

const goalState = new Board(['_', '1', '2', '3', '4', '5', '6', '7', '8'], 0, null);
const goalStateStringified = goalState.toString();
const initialState = new Board(['8', '7', '6', '5', '4', '3', '2', '1', '_'], 8);
var fringe = [initialState];
console.log(fringe);
var explored = new Set();
var pathFound = false;

while (fringe.length > 0 && !pathFound){
    let exploring = fringe.shift();

    // if a new board state
    if (!explored.has(exploring.toString())){
        explored.add(exploring.toString());

        if (exploring.toString() === goalStateStringified){
            console.log("Success!");
            pathFound = true;
            console.log(exploring.path());
        }

        // make all possible swaps to the board states, and add them to the fringe container
        // as new states that have references to the parent (called exploring)
        let possibleSwaps = exploring.possibleSwaps(MAX_D);
        possibleSwaps.forEach((swapDirection) => {
            let newNode = new Board([...exploring.board], exploring.blankIndex, exploring);
            newNode.swapBlank(swapDirection, MAX_D);
            fringe.push(newNode);
        });
    }
}
if (!pathFound){
    console.log("Failure. No path found.");
}
console.log(`Unique states encountered: ${explored.size}`);

