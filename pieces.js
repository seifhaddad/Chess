// Definitions of pieces

var kng = [[x-1, y-1], [x+1, y-1], /* up and left, up and right */
           [x-1, y+1], [x+1, y+1], /* down and left, down and right */
           [x, y-1], [x, y+1], /* straight up, straight down */
           [x-1, y], [x+1, y]] /* straight left, straight right */

var qun = [[x-i, y-j], [x+i, y-j], /* up and left, up and right */
           [x-i, y+j], [x+i, y+j], /* down and left, down and right */
           [x, y-j], [x, y+j], /* straight up, straight down */
           [x-i, y], [x+i, y]] /* straight left, straight right */

var bis = [[x-1, y-1], [x+1, y-1], /* up and left, up and right */
           [x-1, y+1], [x+1, y+1], /* down and left, down and right */

var rook = [[x, y-1], [x, y+1], /* straight up, straight down */
            [x-1, y], [x+1, y]] /* straight left, straight right */

var kngt = [[x+3, y-1], [x+3, y+1], /* up and right, up and left */
            [x-3, y-1], [x-3, y+1], /* left and up, left and down */
            [x-1, y-3], [x+1, y-3], /* left and up, left and down */
            [x-1, y+3], [x+1, y+3]] /* left and up, left and down */

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
