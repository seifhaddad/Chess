document.addEventListener('DOMContentLoaded', function(){
  var matrix = [[RookB1, BishopB1, KnightB1, QueenB, KingB, KnightB2, BishopB2, RookB2],
 [pawnB1, pawnB2, pawnB3, pawnB4, pawnB5, pawnB6, pawnB7, pawnB8], 
[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0], [pawnW1, pawnW2, pawnW3, pawnW4, pawnW5, pawnW6, pawnW7, pawnW8],[RookW1, BishopW1, KnightW1, QueenW, KingW, KnightW2, BishopW2, RookW2]];
 generateGrid(matrix);

  function generateGrid(matrix){
    var $table = document.querySelector('#grid');
    $table.innerHTML = '';

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


var BishopW1, BishopW2 = { color: "white", type:"bishop"};

var RookW1, RookW2 = { color: "white", type: "rook"};

var pawnW1, pawnW2, pawnW3, pawnW4, pawnW5, pawnW6, pawnW7, pawnW8 = {color: "white", type:"pawn"};

var KnightW1, KnightW2 = { color: "white", type: "pawn"};

var QueenW = { color: "white", type: "queen"};

var KingW = { color: "white", type: "queen"};
//black objects//

var BishopB1, BishopB2 = {color: "black", type: "bishop"};

var RookB1, RookB2 = { color: "black", type:"rook"};

var pawnB1, pawnB2, pawnB3, pawnB4, pawnB5, pawnB6, pawnB7, pawnB8 = {color: "black", type: "pawn"};

var KnightB1, KnightB2 = {color: "black", type: "pawn"};

var QueenB = {color: "black", type: "queen"};

var KingB = {color: "black", type: "queen"};
/*black pieces*/


var pawn = {type:"pawn",color:"white",position:"a1",image:"picture of pawn"};
var chessboard=["a1","a2","a3","a4"];
        
console.log(chessboard);
//console.log(pawn.position)
        
        function setBoard(){
         for (i=0;i<8;i++){
           for(j=0;j<8;j++){
                   var $pieceLocal = '<td id="'+pawn.position+'"></td>';
                   var $boardLocal = chessboard[i][j];
                   console.log($boardLocal);
                   console.log($pieceLocal);
           if($pieceLocal === $boardLocal){
                  getElementById($boardLocal).innerHTML=pawn.image;
           }  else alert("nope");
           }
        }
       }
setBoard();
});
