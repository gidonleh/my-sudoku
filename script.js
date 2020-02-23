var sudokuBoard = [[1,2,3, 4,5,6 ,7,8,9],
                   [4,5,6, 7,8,9 ,1,2,3],
                   [7,8,9, 1,2,3 ,4,5,6],

                   [3,1,2, 6,4,5 ,9,7,8],
                   [6,4,5, 9,7,8 ,3,1,2],
                   [9,7,8, 3,1,2 ,6,4,5],

                   [2,3,1, 5,6,4 ,8,9,7],
                   [5,6,4, 8,9,7 ,2,3,1],
                   [8,9,7, 2,3,1 ,5,6,4]];

const idMap = [['i00','i01','i02','i03','i04','i05','i06','i07','i08'],
             ['i10','i11','i12','i13','i14','i15','i16','i17','i18'],
             ['i20','i21','i22','i23','i24','i25','i26','i27','i28'],
             ['i30','i31','i32','i33','i34','i35','i36','i37','i38'],
             ['i40','i41','i42','i43','i44','i45','i46','i47','i48'],
             ['i50','i51','i52','i53','i54','i55','i56','i57','i58'],
             ['i60','i61','i62','i63','i64','i65','i66','i67','i68'],
             ['i70','i71','i72','i73','i74','i75','i76','i77','i78'],
             ['i80','i81','i82','i83','i84','i85','i86','i87','i88']
             ];

// function sudokuGenerator() {
//     let ready = false
//     while(!ready){
//         tmpBoard = boardGenerator();
//         if(isBoardGood(tmpBoard)){
//             ready == true;
//         }
//     }
//     return tmpBoard;
// }
function boardGenerator(){
    let board = [[1,2,3, 4,5,6 ,7,8,9],
                 [4,5,6, 7,8,9 ,1,2,3],
                 [7,8,9, 1,2,3 ,4,5,6],

                 [3,1,2, 6,4,5 ,9,7,8],
                 [6,4,5, 9,7,8 ,3,1,2],
                 [9,7,8, 3,1,2 ,6,4,5],

                 [2,3,1, 5,6,4 ,8,9,7],
                 [5,6,4, 8,9,7 ,2,3,1],
                 [8,9,7, 2,3,1 ,5,6,4]];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            board[i][j] = [1,2,3,4,5,6,7,8,9];
        }        
    }
    let boardBackup = dupArr(board);
    let count = 0;
    for (let i = 0; i < 9; i++) {
        boardBackup = dupArr(board);
        for (let j = 0; j < 9; j++) {
            count++;            
            board[i][j] = board[i][j][ Math.floor(Math.random() * board[i][j].length ) ];

            if(board[i][j] == undefined){
                j = -1;
                board = dupArr(boardBackup);
                continue;
            }else{
                setRow(board, board[i][j], i);
                setCol(board, board[i][j], j);
                setBox(board, board[i][j], i, j);
            }            
        }     
    }
    //document.getElementById('steps').innerHTML = "Steps: "+ count;
    return board;
}
function setRow(board, num, row) {
    for (let i = 0; i < 9; i++) {
         if(Array.isArray(board[row][i])){
             for (let j = 0; j < board[row][i].length; j++) {
                 if(board[row][i][j] == num ){
                    board[row][i].splice(j,1);
                 }
                 
             }
         }
    }
    
}
function setCol(board, num, col) {
    for (let i = 0; i < 9; i++) {
         if(Array.isArray(board[i][col])){
             for (let j = 0; j < board[i][col].length; j++) {
                 if(board[i][col][j] == num ){
                    board[i][col].splice(j,1);
                 }                 
             }
         }
    }
    
}
function setBox(board, num , row, col) {
    if(row < 3 && col < 3){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    }
    if(row < 3 && col > 2 && col < 6){
        for (let i = 0; i < 3; i++) {
            for (let j = 3; j < 6; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    }   
    if(row < 3  && col > 5){
        for (let i = 0; i < 3; i++) {
            for (let j = 6; j < 9; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    } 

    if(row > 2 && row < 6 && col < 3){
        for (let i = 3; i < 6; i++) {
            for (let j = 0; j < 3; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    } 
    if(row > 2 && row < 6 && col > 2 && col < 6){
        for (let i = 3; i < 6; i++) {
            for (let j = 3; j < 6; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    } 
    if(row > 2 && row < 6 && col > 5){
        for (let i = 3; i < 6; i++) {
            for (let j = 6; j < 9; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    } 

    if(row > 5 && col < 3){
        for (let i = 6; i < 9; i++) {
            for (let j = 0; j < 3; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    } 
    if(row > 5 && col > 2 && col < 6){
        for (let i = 6; i < 9; i++) {
            for (let j = 3; j < 6; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    } 
    if(row > 5 && col > 5){
        for (let i = 6; i < 6; i++) {
            for (let j = 6; j < 9; j++) {
                if(Array.isArray(board[i][j])){
                    for (let k = 0; k < board[i][j].length; k++) {
                        if(board[i][j][k] == num ){
                            board[i][j].splice(k,1);
                         }       
                        
                    }
                }
            }
        }
    } 

}


function checkBoard(board) {
                                            // row check
    let linecount = [0,0,0,0,0,0,0,0,0];
    // debugger;
    for (let i = 0; i < 9; i++) {
        linecount = [0,0,0,0,0,0,0,0,0];
        for (let j = 0; j < 9; j++) {
            if(board[i][j] > 0 && board[i][j] < 10 ){
                linecount[board[i][j] - 1]++;
            }else{
                console.log("row; number not  1-9 on line: "+i +", "+ j);
                
                return false;
            }
                       
        }        
        for (let k = 0; k < linecount.length; k++) {
            if(linecount[k] != 1 ){
                console.log("row; not seq num on line: "+ k);

                return false;
            }      
        }
    }
                                            // colomn check
    
    for (let i = 0; i < 9; i++) {
        linecount = [0,0,0,0,0,0,0,0,0];
        for (let j = 0; j < 9; j++) {
            if(board[j][i] > 0 && board[j][i] < 10 ){
                linecount[board[j][i] - 1]++;
            }else{
                console.log("col; number not  1-9 on line: "+j +", "+ i);
                return false;
            }
                       
        }        
        for (let k = 0; k < linecount.length; k++) {
            if(linecount[k] != 1 ){
                console.log("col; not seq num on line: ");
                return false;
            }            
        }
    }

                                            // box check

    linecount = [0,0,0,0,0,0,0,0,0];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            linecount[board[j][i] - 1]++;
        }
    }
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }

    linecount = [0,0,0,0,0,0,0,0,0];

    for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
            linecount[board[j][i] - 1]++;
        }
    }
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }
    linecount = [0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
            linecount[board[j][i] - 1]++;
        }
    }
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }
    linecount = [0,0,0,0,0,0,0,0,0];
    for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            linecount[board[j][i] - 1]++;
        }
    }
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }
    linecount = [0,0,0,0,0,0,0,0,0];
    for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++) {
            linecount[board[j][i] - 1]++;
        }
    }
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }
    linecount = [0,0,0,0,0,0,0,0,0];
    for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++) {
            linecount[board[j][i] - 1]++;
        }
    }
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }
    linecount = [0,0,0,0,0,0,0,0,0];
    for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
            linecount[board[j][i] - 1]++;
        }
    } 
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }

    linecount = [0,0,0,0,0,0,0,0,0];
    for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++) {
            linecount[board[j][i] - 1]++;
        }
    }
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }
    linecount = [0,0,0,0,0,0,0,0,0];
    for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++) {
            linecount[board[j][i] - 1]++;
        }
    }
    for (let k = 0; k < linecount.length; k++) {
        if(linecount[k] != 1 ){
            console.log("col; not seq num on line: ");
            return false;
        }            
    }

    return true;
}

function fillBoard(preboard, idmap) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(idmap[i][j]).value = preboard[i][j];
            // console.log(i+","+j + " ;  "+preboard[i][j]);
                       
        }        
    }
}


function fill() {
    // fillBoard(sudokuBoard, idMap);
    fillBoard(boardGenerator(),idMap);

}

function dupArr(arr) {
    
    let clone = [[1,2,3, 4,5,6 ,7,8,9],
    [4,5,6, 7,8,9 ,1,2,3],
    [7,8,9, 1,2,3 ,4,5,6],

    [3,1,2, 6,4,5 ,9,7,8],
    [6,4,5, 9,7,8 ,3,1,2],
    [9,7,8, 3,1,2 ,6,4,5],

    [2,3,1, 5,6,4 ,8,9,7],
    [5,6,4, 8,9,7 ,2,3,1],
    [8,9,7, 2,3,1 ,5,6,4]];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(Array.isArray(arr[i][j])){
                clone[i][j] = arr[i][j].slice();
            }else{
                clone[i][j] = arr[i][j];

            }
        }        
    }
    return clone;
}

function easy(){
    let board = boardGenerator();
    let easyboard = dupArr(board);

    let count = 20;

    while(count > 0){
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if( Math.floor(Math.random() * 4) +1  == 4){
                    easyboard[i][j] = "";
                    count--;
                }  
                if(count <= 0 ){
                    i=9;
                    break;
                }           
            }

        }

    }
    fillBoard(easyboard,idMap);  
    disableIt();

}
function medium(){
    
    let board = boardGenerator();
    let mediumboard = dupArr(board);

    let count = 40;

    while(count > 0){
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if( Math.floor(Math.random() * 4) +1  == 4){
                    mediumboard[i][j] = "";
                    count--;
                }  
                if(count <= 0 ){
                    i=9;
                    break;
                }           
            }

        }

    }
    fillBoard(mediumboard,idMap);  
    disableIt();

}
function hard(){
    let board = boardGenerator();
    let hardboard = dupArr(board);

    let count = 60;

    while(count > 0){
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if( Math.floor(Math.random() * 4) +1  == 4){
                    hardboard[i][j] = "";
                    count--;
                }  
                if(count <= 0 ){
                    i=9;
                    break;
                }           
            }

        }

    }
    fillBoard(hardboard,idMap);  
  disableIt();
}
   

function disableIt() {
    let a = '';
    let b = '';
    let c = 0;
    for (let i = 0; i < 9; i++) {
        
        for (let j = 0; j < 9; j++) {

            switch (i) {

                case 0: a = 'i0';
                break;

                case 1: a = 'i1';
                break;

                case 2: a = 'i2'
                break;
                
                case 3: a = 'i3';
                break;

                case 4: a = 'i4';
                break;

                case 5: a = 'i5'
                break;
                
                case 6: a = 'i6';
                break;

                case 7: a = 'i7';
                break;

                case 8: a = 'i8'
                break;
            }
            b = j.toString();
            if (document.getElementById(a+b).value != ''){
                document.getElementById(a+b).disabled = true;

            }
            else{
                document.getElementById(a+b).disabled = false;
            }

        }
        
    }

}

function clearBoard() {
    for (let i = 0; i < 9 ; i++){
        for(let j = 0; j < 9; j++){            
            if(!document.getElementById(idMap[i][j]).disabled){
                document.getElementById(idMap[i][j]).value = '' ;

            }
        }

    }
    
}

function check() {
    for (let i = 0; i < 9 ; i++){
        for(let j = 0; j < 9; j++){ 
            if(document.getElementById(idMap[i][j]).value == ''){
                alert ('Board not complete');
                console.log("!!");
                
                return;
            }
        }
    }
    let newArr =  
    [[1,2,3, 4,5,6 ,7,8,9],
    [4,5,6, 7,8,9 ,1,2,3],
    [7,8,9, 1,2,3 ,4,5,6],

    [3,1,2, 6,4,5 ,9,7,8],
    [6,4,5, 9,7,8 ,3,1,2],
    [9,7,8, 3,1,2 ,6,4,5],

    [2,3,1, 5,6,4 ,8,9,7],
    [5,6,4, 8,9,7 ,2,3,1],
    [8,9,7, 2,3,1 ,5,6,4]];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            newArr[i][j] = document.getElementById(idMap[i][j]).value
        }
        
    }
    
    if (checkBoard(newArr)) {
        alert("you did it!");
    }else{
        alert("try again :(");
    }
console.log(newArr);
}

function activateLevel() {

    let x = document.getElementById("mySelect").value;
    if (x == 'Easy')
        easy();
    else if (x == 'Intermediate')
        medium();
    else if (x == 'Hard')
        hard();
    else if (x == 'Clear')
        clearBoard();
    else if (x == 'Check')
        check();
}