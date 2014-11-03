var $table = document.querySelector('#chess_board');

var kingW = { color: "white", type: "king", img: "img/wking.png"};

var boardArray = [[0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, kingW, 0, 0, 0]];

  function boardCreator(boardArray){
    $table.innerHTML = "";
    for (var i = 0; i < boardArray.length; i++){
      var $tr = document.createElement('tr');
      $table.appendChild($tr);
      for (var j = 0; j < boardArray.length; j++){
        var $td = document.createElement('td');
        $tr.appendChild($td);
        if (i === 0){
          // append $td with ID of A[j+1]
          $td.setAttribute('id', 'H' + [j+1]);
        } else if (i === 1) {
          // append $td with ID of B[j+1]
          $td.setAttribute('id', 'G' + [j+1])
        } else if (i === 2) {
          // append $td with ID of C[j+1]
          $td.setAttribute('id', 'F' + [j+1]);
        } else if (i === 3) {
           $td.setAttribute('id', 'E' + [j+1]);
        } else if (i === 4) {
           $td.setAttribute('id', 'D' + [j+1]);
        } else if (i === 5) {
           $td.setAttribute('id', 'C' + [j+1]);
        } else if (i === 6) {
           $td.setAttribute('id', 'B' + [j+1]);
        } else if (i === 7) {
           $td.setAttribute('id', 'A' + [j+1]);
        }      
      }
    }
  }


/* POSSIBLE LOOP TO CHECK IF OBJECT THERE FOR VALID MOVES
 * Loop through the board (for loop)
 * if location !== object, insert 0
 * run this loop each time a piece is moved to update board
*/

document.addEventListener('DOMContentLoaded', function(){
  boardCreator(boardArray);

  var $A5 = document.querySelector('#A5');
  var $img = document.createElement('img');
  $A5.appendChild($img).setAttribute('src', kingW.img);

  $('td').click(boardArray[0][1][2], function(){
    // grab DATA from what you clicked
    if (boardArray === 0){
      console.log("This equals zero");
    } else {
      console.log("This equals something else");
    }
    // console log to check data
  });
  
  /*var clickedCell = document.querySelectorAll('td');

  function selectPiece(boardArray){
    for (var i = 0; i < boardArray.length; i++){
      for (var j = 0; j < boardArray.length; j++){
        clickedCell[i].addEventListener('click', function(){
        // will need to return the ID from the TD that was clicked on
        console.log("You clicked something");
        });
      }
    }
  }

  selectPiece(boardArray);*/
});

/* --- Creating Objects for pieces -------
document.addEventListener('DOMContentLoaded', function(){
var BishopW1, BishopW2 = { color: "white", type:"bishop", img: "img/wbishop.png"};
var RookW1, RookW2 = { color: "white", type: "rook", img: "img/wrook.png"};

var pawnW1, pawnW2, pawnW3, pawnW4, pawnW5, pawnW6, pawnW7, pawnW8 = {color: "white", type:"pawn", img: "img/wpawn.img"};

var KnightW1, KnightW2 = { color: "white", type: "pawn", img: "img/wknight.png"};

var QueenW = { color: "white", type: "queen",img: "img/wqueen.png"};

var KingW = { color: "white", type: "king", img: "img/wking.png"};
//black objects//

var BishopB1, BishopB2 = {color: "black", type: "bishop", img: "img/bbishop.png"};

var RookB1, RookB2 = { color: "black", type:"rook", img: "img/brook.png"};

var pawnB1, pawnB2, pawnB3, pawnB4, pawnB5, pawnB6, pawnB7, pawnB8 = {color: "black", type: "pawn", img: "img/bpawn.png"};

var KnightB1, KnightB2 = {color: "black", type: "pawn", img: "img/bknight.png"};

var QueenB = {color: "black", type: "queen", img: "img/bqueen.png"};

var KingB = {color: "black", type: "king", img: "img/bking.png"};
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
        // thatteTableCell(cell); td goes into a tr
        var $td = document.createElement('td');
        $td.setAttribute('img',cell.img);
        $tr.appendChild($td);
        // alternative:
        // $tr.appendChild( createTableCell(cell) );
      });
      // add that tr to the table
      $table.appendChild($tr);
     // function addImag(cell) {
   });
 } */




/* ------- KRIS WORK FROM 10/30/14 --------
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
setBoard();*/

