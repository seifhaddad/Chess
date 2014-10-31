function selectPiece(){
  var selected = document.getElementById("b2");

  document.addEventListener("click", function(){
    var location;
    var selected;
    document.getElementById("b2").index = location;
    document.getElementById("b2").object = location;
    });

    // on clicking a space
    // event listeners on every space??
    // we need to identify which space we've clicked on -- function??
    // return that spaces index [x, y]
    // return if that space possesses an object
    // ??? return [object.bking.name, object.bking.index[i][j]]
    td.addEventListener('click', isOccupied);

  return selectPiece
}

function isOccupied(x, y){

}

function potential(selectPiece){
    if (piece.type === king) {
      var up-left = [x-1, y-1]
      var up = [x, y-1]
      var up-right = [x+1, y-1]
      var left = [x-1, y]
      var right = [x+1, y]
      var down-left = [x-1, y+1]
      var down = [x, y+1]
      var down-right = [[x-1, y], [x+1, y]]

    } else return
}

function destination(selectPiece){

}


//Step 5

function newBoard(selectPiece, destination){
  console.log(board.join('\n') + '\n\n');
  destination[i][j] = selectPiece[i][j]
  //returns selected piece
  selectPiece[i][j] = "0";
  //returns voided cell with new value
  console.log(board.join('\n'));
}


var kng = [[x-1, y-1], [x+1, y-1], /* up and left, up and right */
           [x-1, y+1], [x+1, y+1], /* down and left, down and right */
           [x, y-1], [x, y+1], /* straight up, straight down */
           [x-1, y], [x+1, y]] /* straight left, straight right */

var qun = [[x-i, y-j], [x+i, y-j], /* up and left, up and right */
           [x-i, y+j], [x+i, y+j], /* down and left, down and right */
           [x, y-j], [x, y+j], /* straight up, straight down */
           [x-i, y], [x+i, y]] /* straight left, straight right */

var bis = [[x-i, y-j], [x+i, y-j], /* up and left, up and right */
           [x-i, y+j], [x+i, y+j], /* down and left, down and right */

var rook = [[x, y-j], [x, y+j], /* straight up, straight down */
            [x-i, y], [x+i, y]] /* straight left, straight right */

var kngt = [[x+2, y-1], [x+2, y+1], /* up and right, up and left */
            [x-2, y-1], [x-2, y+1], /* left and up, left and down */
            [x-1, y-2], [x+1, y-2], /* left and up, left and down */
            [x-1, y+2], [x+1, y+2]] /* left and up, left and down */

var hbpwn = [[x+1, y], /* regular, single move */
             [x+2, y], /* first move */
             [x+1, y-1], /* attack up */
             [x+1, y+1]] /* attack down */

var hwpwn = [[x+1, y], /* regular, single move */
             [x+2, y], /* first move */
             [x+1, y-1], /* attack up */
             [x+1, y+1]] /* attack down */

var vbpwn = [[x, y-1], /* regular, single move */
             [x, y-2], /* first move */
             [x-1, y+1], /* attack left */
             [x+1, y+1]] /* attack right */

var vwpwn = [[x, y+1], /* regular, single move */
             [x, y+2], /* first move */
             [x-1, y-1], /* attack left */
             [x-1, y+1]] /* attack right */
