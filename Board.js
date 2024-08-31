export default class Board {
    // will store the boards as a 1 dimensional array

    constructor(board, blankIndex) {
        this.board = board;
        this.blankIndex = blankIndex;
        this.prev = null;
    }

    // assumes board state is stores as a one dimensional array
    swapBlank(direction, maxD){
        var blankIndex = this.blankIndex;
        switch(direction){
            case 'up':
                this.swap(this.board, blankIndex, blankIndex-maxD);
                this.blankIndex -= maxD;
                break;

            case 'down':
                this.swap(this.board, blankIndex, blankIndex+maxD);
                this.blankIndex += maxD;
                break;

            case 'right':
                this.swap(this.board, blankIndex, blankIndex+1);
                this.blankIndex++;
                break;

            case 'left':
                this.swap(this.board, blankIndex, blankIndex-1);
                this.blankIndex--;
                break;
            
            default:
                throw new Error("Unrecognized direction passed to swapBlank function.");
        }
    }

    possibleSwaps(maxD){
        let possibleSwaps = [];
        let numTiles = maxD * maxD;

        if (blankIndex > maxD - 1){ // if not on first row, indices 0, 1, 2 for maxD of 3
            possibleSwaps.push("up");
        }

        if (blankIndex < numTiles - maxD - 1){ // if not on last row, indices 6,7,8 for maxD of 3
            possibleSwaps.push("down");
        }

        if (blankIndex % max > 0){ // if not in left column
            possibleSwaps.push("left");
        }

        if (blankIndex % maxD < maxD - 1){ // if not in right column
            possibleSwaps.push("right");
        }

        return possibleSwaps;

    }

    swap(arr, i1, i2){
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }

    toString(){
        return this.board.join();
    }

    path(){
        path = [];
        for (iter = this; iter != null; iter = this.prev){
            path.push(iter.board)
        }
        return path;
    }
}