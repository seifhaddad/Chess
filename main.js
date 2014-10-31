var $table = document.querySelector('#chess_board');

var boardArray = [[0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0],
                  [0, 0, 0, 0, 0, 0, 0, 0]];

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


document.addEventListener('DOMContentLoaded', function(){
  boardCreator(boardArray);
});

/* KRIS WORK FROM 10/30/14
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

