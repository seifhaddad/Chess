document.addEventListener('DOMContentLoaded', function(){

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
