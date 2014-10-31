// Definitions of pieces


piece {
  "type": "",
  "color": "",
  "alive": "",
  "location": "",
  "image": ""
};

var kingB = {
  "type": "king",
  "color": "black",
  "alive": "1",
  "location": [1, 1],
  "image": "img/bking.png"
};


function selectPiece(){
  td.addEventListener('click', isOccupied);
  
  return selectPiece
}

function isOccupied(x, y){

}

function potential(selectPiece){
    if piece.type === king {
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

function king(destination){

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
