export default class Board {
    // will store the boards as a 1 dimensional array

    constructor(board, blankIndex, prev) {
        this.board = board;
        this.blankIndex = blankIndex;
        this.prev = prev;
    }

    // assumes board state is stores as a one dimensional array
    swapBlank(direction, maxD){
        var blankIndex = this.blankIndex;
        switch(direction){
            case 'up':
                this.swap(blankIndex, blankIndex-maxD);
                this.blankIndex -= maxD;
                break;

            case 'down':
                this.swap(blankIndex, blankIndex+maxD);
                this.blankIndex += maxD;
                break;

            case 'right':
                this.swap(blankIndex, blankIndex+1);
                this.blankIndex++;
                break;

            case 'left':
                this.swap(blankIndex, blankIndex-1);
                this.blankIndex--;
                break;
            
            default:
                throw new Error("Unrecognized direction passed to swapBlank function.");
        }
    }

    possibleSwaps(maxD){
        let possibleSwaps = [];
        let numTiles = maxD * maxD;

        if (this.blankIndex > maxD - 1){ // if not on first row, indices 0, 1, 2 for maxD of 3
            possibleSwaps.push("up");
        }

        if (this.blankIndex < numTiles - maxD){ // if not on last row, indices 6,7,8 for maxD of 3
            possibleSwaps.push("down");
        }

        if (this.blankIndex % maxD > 0){ // if not in left column
            possibleSwaps.push("left");
        }

        if (this.blankIndex % maxD < maxD - 1){ // if not in right column
            possibleSwaps.push("right");
        }

        return possibleSwaps;

    }

    swap(i1, i2){
        let temp = this.board[i1];
        this.board[i1] = this.board[i2];
        this.board[i2] = temp;
    }

    toString(){
        return this.board.join();
    }

    path(){
        let path = [];
        for (let iter = this; iter != null; iter = iter.prev){
            path.push(iter.board)
        }
        return path;
    }
}
