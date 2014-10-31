document.addEventListener('DOMContentLoaded', function(){
  var matrix = [[RookB1, BishopB1, KnightB1, QueenB, KingB, KnightB2, BishopB2, RookB2],
 [pawnB1, pawnB2, pawnB3, pawnB4, pawnB5, pawnB6, pawnB7, pawnB8], 
[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],
[RookW1, BishopW1, KnightW1, QueenW, KingW, KnightW2, BishopW2, RookW2],
 [pawnW1, pawnW2, pawnW3, pawnW4, pawnW5, pawnW6, pawnW7, pawnW8]]; 
 generateGrid(matrix);

  function generateGrid(matrix){
    var $table = document.querySelector('#grid');
    $table.innerHTML = '';
    // matrix => [0, 0, 0]
    //           [1, 1, 1]
    //           [0, 0, 0]

    matrix.forEach(function(row){ // first time, row => [0, 0, 0]
      // create a tr for the row
      var $tr = document.createElement('tr');
      row.forEach(function(cell){ // first time, cell => 0
        // cell goes into a new td
        // that td goes into a tr
        var $td = document.createElement('td');
        $td.textContent = cell;
        $tr.appendChild($td);
        // alternative:
        // $tr.appendChild( createTableCell(cell) );
      });
      // add that tr to the table
      $table.appendChild($tr);
    });
  }







var BishopW1 = {
  color: "white",
  type:"bishop",
  place: 1,
};

var BishopW2 = BishopW1;

var RookW1 = {
  color: "white",
  type: "rook",
  place: 1,
};

var RookW2 = RookW1;

var pawnW1 = {
  color: "white",
  type:"pawn",
  place: 1,
};

var pawnW2 =  pawnW1;
var pawnW3 =  pawnW1;
var pawnW4 =  pawnW1;
var pawnW5 =  pawnW1;
var pawnW6 =  pawnW1;
var pawnW7 =  pawnW1;
var pawnW8 =  pawnW1;

var KnightW1 = {
  color: "white",
  type: "pawn",
  place: 1,
};

var KnightW2 =  KnightW1;

var QueenW = {
  color: "white",
  type: "queen",
  place: 1,
};

var KingW = {
  color: "white",
  type: "queen",
  place: 1,
};
//black objects//

var BishopB1 = {
  color: "black",
  type: "bishop",
  place: 1,
};

var BishopB2 =  BishopB1;

var RookB1 = {
  color: "black",
  type:"rook",
  place: 1,
};

var RookB2 = RookB1;

var pawnB1 = {
  color: "black",
  type: "pawn",
  place: 1,
};

var pawnB2 =  pawnB1;
var pawnB3 =  pawnB1;
var pawnB4 =  pawnB1;
var pawnB5 =  pawnB1;
var pawnB6 =  pawnB1;
var pawnB7 =  pawnB1;
var pawnB8 =  pawnB1;

var KnightB1 = {
  color: "black",
  type: "pawn",
  place: 1,
};

var KnightB2 =  KnightB1;

var QueenB = {
  color: "black",
  type: "queen",
  place: 1,
};

var KingB = {
  color: "black",
  type: "queen",
  place: 1,
};
/*black pieces*/

});
