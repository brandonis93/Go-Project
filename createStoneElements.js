(() => {
    let boardStoneColour = 
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    let boardStoneGroupBlack = 
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    let boardStoneGroupWhite = 
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    const NEITHER = 0;
    const BLACK = 1;
    const WHITE = 2;
    let whoseTurn = BLACK;

    let stoneDivString = [];
    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 19; j++) {
            stoneDivString.push(`<div class="stone" id="board${[i]},${[j]}"></div>`)
        };
    };

    let gridStoneContainer = document.getElementsByClassName("grid-stone-container")[0];
    let stoneDiv = [];
    for (let i = 0; i < 19; i++) {
        const stoneGroupElement = document.createElement("div");
        stoneGroupElement.id = `boardCol${(i)}`;
        gridStoneContainer.appendChild(stoneGroupElement);
        for (let j = 0; j < 19; j++) {
            stoneDiv[i] = document.getElementById(`boardCol${(i)}`);
            stoneDiv[i].innerHTML += stoneDivString[j + (i * 19)];
        };
    };
   


    function refreshUI() {
        for (let i = 0; i < 19; i++) {
            for (let j = 0; j <19; j++) {
                const stoneElement = document.getElementById(`board${[i]},${[j]}`);
                if (boardStoneColour[i][j] == NEITHER) {
                    stoneElement.style.opacity = "0";
                    stoneElement.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
                };
                if (boardStoneColour[i][j] == BLACK) {
                    stoneElement.style.opacity = "1";
                    stoneElement.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
                };
                if (boardStoneColour[i][j] == WHITE) {
                    stoneElement.style.opacity = "1";
                    stoneElement.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
                };
            };
        };
    };

    for (let i = 0; i < 19; i++){
        for (let j = 0; j < 19; j++) {
            click(i,j)
            mouseOver(i,j)
            mouseOut(i,j)

        };
    };

    function mouseOver(i,j) {
        const stoneElement = document.getElementById(`board${[i]},${[j]}`);
        stoneElement.addEventListener("mouseover", function(stone) {
        if (boardStoneColour[i][j] == NEITHER && whoseTurn == BLACK) {
            stoneElement.style.opacity = "0.3";
            stoneElement.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
        };
        if (boardStoneColour[i][j] == NEITHER && whoseTurn == WHITE) {
            stoneElement.style.opacity = "0.3";
            stoneElement.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
        };
    });
    };

    function mouseOut(i,j) {
        const stoneElement = document.getElementById(`board${[i]},${[j]}`);
        stoneElement.addEventListener("mouseout", function(stone) {
            if (boardStoneColour[i][j] == NEITHER) {
                stoneElement.style.opacity = "0";
            };
        });
    };

    function click(i,j){
        const stoneElement = document.getElementById(`board${[i]},${[j]}`);
        stoneElement.addEventListener("click",function() {
            if (boardStoneColour[i][j] == NEITHER && whoseTurn == BLACK) {
                stoneElement.style.opacity = "1";
                stoneElement.style.backgroundImage = "radial-gradient(rgb(85, 85, 85),black)";
                whoseTurn = WHITE;
                boardStoneColour[i][j] = BLACK;
                addStoneGroupBlack(i,j)
                changeGroupNumber(i,j)
                scanBoardStoneGroupSurroundedBlack()
                captureSurroundedStone(i,j)
                refreshUI()
                };
            if (boardStoneColour[i][j] == NEITHER && whoseTurn == WHITE) {
                stoneElement.style.opacity = "1";
                stoneElement.style.backgroundImage = "radial-gradient(rgb(185, 185, 185),white)";
                whoseTurn = BLACK;
                boardStoneColour[i][j] = WHITE;
                addStoneGroupWhite(i,j)
                changeGroupNumber(i,j)
                captureSurroundedStone(i,j)
                refreshUI()

            };
        });
    };

    function stoneSurround(y,x) {
        if (boardStoneColour[y]?.[x] == undefined) {
            return false;
        } 
        const stoneType = boardStoneColour[y][x];
        if (stoneType == NEITHER) {
            return false;
        };
        let surroundedStone = [boardStoneColour[y+1]?.[x],boardStoneColour[y-1]?.[x],boardStoneColour[y]?.[x+1],boardStoneColour[y]?.[x-1]]
        if (stoneType == BLACK) {
            if (!surroundedStone.includes(NEITHER) && !surroundedStone.includes(BLACK)) {
                return true;
            };
        };
        if (stoneType == WHITE) {
            if (!surroundedStone.includes(NEITHER) && !surroundedStone.includes(WHITE)) {
                return true;
            };
        };    
    };

    function captureSurroundedStone(i,j) {
        if (stoneSurround(i+1,j)) {
            boardStoneColour[i+1][j] = NEITHER; 
        }
        if (stoneSurround(i-1,j)) {
            boardStoneColour[i-1][j] = NEITHER;         
        }
        if (stoneSurround(i,j+1)) {
            boardStoneColour[i][j+1] = NEITHER;    
        }
        if (stoneSurround(i,j-1)) {
            boardStoneColour[i][j-1] = NEITHER;   
        }
    }


    function checkStoneGroupCoordinates(){
        let stoneGroupCoordinate = [];
        for (k = 0; k < stoneGroupCountBlack; k++){
            checkSingleStoneCoordinatesBlack(k)
            stoneGroupCoordinate.push(checkSingleStoneCoordinatesBlack(k))
        }
        return stoneGroupCoordinate
    }
 
    function checkSingleStoneCoordinatesBlack(k){
        let stoneGroupCoordinateX = [];
        let stoneGroupCoordinateY = [];
        let stoneGroupCoordinateXY = [];
        for (x = 0; x < 19; x++){
            for (y = 0; y < 19; y++){
                if(boardStoneGroupBlack[x][y] = boardStoneColour(k)){
                    stoneGroupCoordinateX.push(x)
                    stoneGroupCoordinateY.push(y)
                }
            }
        }
        stoneGroupCoordinateXY.push(stoneGroupCoordinateX)
        stoneGroupCoordinateXY.push(stoneGroupCoordinateY)
        return stoneGroupCoordinateXY
    }

    //Returns 19x19 array, each with array of 4 numbers showing neighbouring stones. 0 if opponent/corner, 1 if friendly, 2 if empty
    function scanBoardStoneGroupSurroundedBlack(){
        let boardStoneColourSurround = [];
        let boardStoneColourSurroundArray = [];
        let surroundStoneColourArray;
        for (let x = 0; x < 19; x++) {
            for (let y = 0; y < 19; y++){
                surroundStoneColourArray = checkSingleStoneSurroundedBlack(x,y)
                boardStoneColourSurround.push(surroundStoneColourArray)
            }
            boardStoneColourSurroundArray.push(boardStoneColourSurround)
            boardStoneColourSurround = [];
        }
        console.log(boardStoneColourSurroundArray)
        return boardStoneColourSurroundArray
    }

    function scanBoardStoneGroupSurroundedWhite(){
        let boardStoneColourSurround = [];
        let boardStoneColourSurroundArray = [];
        let surroundStoneColourArray;
        for (let x = 0; x < 19; x++) {
            for (let y = 0; y < 19; y++){
                surroundStoneColourArray = checkSingleStoneSurroundedWhite(x,y)
                boardStoneColourSurround.push(surroundStoneColourArray)
            }
            boardStoneColourSurroundArray.push(boardStoneColourSurround)
            boardStoneColourSurround = [];
        }

        return boardStoneColourSurroundArray
    }
    //Returns array of 4 numbers showing stoneColour of neighbouring stones. 0 if opponent/corner, 1 if friendly, 2 if empty
    function checkSingleStoneSurroundedBlack(i,j){
        let surroundStoneColourArray = [];
        if (boardStoneColour[i]?.[j] !== undefined){
            surroundStoneColourArray.push(checkNeighbourStoneColourBlack(i+1,j))
            surroundStoneColourArray.push(checkNeighbourStoneColourBlack(i-1,j))
            surroundStoneColourArray.push(checkNeighbourStoneColourBlack(i,j+1))
            surroundStoneColourArray.push(checkNeighbourStoneColourBlack(i,j-1))
            return surroundStoneColourArray;
        }
    }

    function checkSingleStoneSurroundedWhite(i,j){
        let surroundStoneColourArray = [];
        if (boardStoneColour[i]?.[j] !== undefined){
                surroundStoneColourArray.push(checkNeighbourStoneColourWhite(i+1,j))
                surroundStoneColourArray.push(checkNeighbourStoneColourWhite(i-1,j))
                surroundStoneColourArray.push(checkNeighbourStoneColourWhite(i,j+1))
                surroundStoneColourArray.push(checkNeighbourStoneColourWhite(i,j-1))
                return surroundStoneColourArray;
            }
        }

    function checkNeighbourStoneColourBlack(i,j){
        if (boardStoneColour[i]?.[j] == WHITE || boardStoneColour[i]?.[j] == undefined){
            return 0
        }
        else if (boardStoneColour[i]?.[j] == BLACK && boardStoneColour[i]?.[j] !== undefined){
            return 1
        }
        else if (boardStoneColour[i]?.[j] == NEITHER){
            return 2
        }
    }

    function checkNeighbourStoneColourWhite(i,j){
        if (boardStoneColour[i]?.[j] == BLACK || boardStoneColour[i]?.[j] == undefined){
            return 0
        }
        else if (boardStoneColour[i][j] == WHITE && boardStoneColour[i]?.[j] !== undefined){
            return 1
        }
        else if (boardStoneColour[i][j] == NEITHER){
            return 2
        }
    }

    //returns group number of all neighbouring enemy stones in array
    function checkNeighbourEnemyStoneGroup(i,j){
        const stoneType = boardStoneColour[i][j]
        let neighbourEnemyStoneGroupArray = [];
        if (checkNextToEnemyStone(i,j) && stoneType == BLACK){
            if(boardStoneColour[i+1]?.[j] !== undefined && boardStoneColour[i+1]?.[j] == WHITE){
                neighbourEnemyStoneGroupArray.push(boardStoneGroupWhite[i+1][j])
            }
            if(boardStoneColour[i-1]?.[j] !== undefined && boardStoneColour[i-1]?.[j] == WHITE){
                neighbourEnemyStoneGroupArray.push(boardStoneGroupWhite[i-1][j])
            }
            if(boardStoneColour[i]?.[j+1] !== undefined && boardStoneColour[i]?.[j+1] == WHITE){
                neighbourEnemyStoneGroupArray.push(boardStoneGroupWhite[i][j+1])
            }
            if(boardStoneColour[i]?.[j-1] !== undefined && boardStoneColour[i]?.[j-1] == WHITE){
                neighbourEnemyStoneGroupArray.push(boardStoneGroupWhite[i][j-1])
            }
            return neighbourEnemyStoneGroupArray
        }
        if (checkNextToEnemyStone(i,j) && stoneType == WHITE){
            if(boardStoneColour[i+1]?.[j] !== undefined && boardStoneColour[i+1]?.[j] == WHITE){
                neighbourEnemyStoneGroupArray.push(boardStoneGroupBlack[i+1][j])
            }
            if(boardStoneColour[i-1]?.[j] !== undefined && boardStoneColour[i-1]?.[j] == WHITE){
                neighbourEnemyStoneGroupArray.push(boardStoneGroupBlack[i-1][j])
            }
            if(boardStoneColour[i]?.[j+1] !== undefined && boardStoneColour[i]?.[j+1] == WHITE){
                neighbourEnemyStoneGroupArray.push(boardStoneGroupBlack[i][j+1])
            }
            if(boardStoneColour[i]?.[j-1] !== undefined && boardStoneColour[i]?.[j-1] == WHITE){
                neighbourEnemyStoneGroupArray.push(boardStoneGroupBlack[i][j-1])
            }
            return neighbourEnemyStoneGroupArray
        }
    }

    //returns TRUE if next to opponet stone
    function checkNextToEnemyStone(i,j){
        let neighbourStoneColour = [boardStoneColour[i+1]?.[j],boardStoneColour[i-1]?.[j],boardStoneColour[i]?.[j+1],boardStoneColour[i]?.[j-1]]
        const stoneType = boardStoneColour[i][j]
        if (stoneType == BLACK){
            if (neighbourStoneColour.includes(WHITE)){
                return true
            }
            else {
                return false
            }
        }
        if (stoneType == WHITE){
            if (neighbourStoneColour.includes(BLACK)){
                return true
            }
            else {
                return false
            }
        } 
    }


    //This function returns array consisting of four group numbers of neighbouring friendlies, from highest to lowest.
    //Used in other functions below. Also returns value specific to stone colour (Black or White). 
    //returnNextStoneGroup function generates [arrray] of 4 group numbers. If stone is at corner, corner is given value of 0.
    function checkHighestGroup(i,j){
        let nextStoneGroupArray = [];
        if (boardStoneColour[i][j] == BLACK) {
        let nextStoneGroup = returnNextStoneGroup(i,j)
            for (let x = 0; x < 4; x++){
            let nextStoneGroupMax = Math.max.apply(null, nextStoneGroup)
            nextStoneGroupArray.push(nextStoneGroupMax)
            let nextStoneGroupMaxOrder = nextStoneGroup.indexOf(nextStoneGroupMax)
            nextStoneGroup[nextStoneGroupMaxOrder] = 0;
            }
            console.log(nextStoneGroupArray)
            return nextStoneGroupArray
        }
        if (boardStoneColour[i][j] == WHITE) {
            let nextStoneGroup = returnNextStoneGroup(i,j)
            for (let x = 0; x < 4; x++){
                let nextStoneGroupMax = Math.max.apply(null, nextStoneGroup)
                nextStoneGroupArray.push(nextStoneGroupMax)
                let nextStoneGroupMaxOrder = nextStoneGroup.indexOf(nextStoneGroupMax)
                nextStoneGroup[nextStoneGroupMaxOrder] = 0;
                }
                return nextStoneGroupArray
            }
        }

    function returnNextStoneGroup(i,j){
        let nextStoneGroup = [];
        if (boardStoneColour[i][j] == BLACK){ 
            if (boardStoneColour[i+1]?.[j] == undefined && boardStoneColour[i]?.[j+1] == undefined){
                    nextStoneGroup = [0,boardStoneGroupBlack[i-1][j],0,boardStoneGroupBlack[i][j-1]]
                    return nextStoneGroup
            }
            if (boardStoneColour[i+1]?.[j] == undefined && boardStoneColour[i]?.[j-1] == undefined){
                nextStoneGroup = [0,boardStoneGroupBlack[i-1][j],boardStoneGroupBlack[i][j+1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i-1]?.[j] == undefined && boardStoneColour[i]?.[j+1] == undefined){
                nextStoneGroup = [0,boardStoneGroupBlack[i+1][j],0,boardStoneGroupBlack[i][j-1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i-1]?.[j] == undefined && boardStoneColour[i]?.[j-1] == undefined){
                nextStoneGroup = [0,boardStoneGroupBlack[i+1][j],boardStoneGroupBlack[i][j+1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i+1]?.[j] == undefined && boardStoneColour[i]?.[j+1] !== undefined && boardStoneColour[i]?.[j-1] !== undefined){
                nextStoneGroup = [0,boardStoneGroupBlack[i-1][j],boardStoneGroupBlack[i][j+1],boardStoneGroupBlack[i][j-1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i-1]?.[j] == undefined && boardStoneColour[i]?.[j+1] !== undefined && boardStoneColour[i]?.[j-1] !== undefined){
                nextStoneGroup = [0,boardStoneGroupBlack[i+1][j],boardStoneGroupBlack[i][j+1],boardStoneGroupBlack[i][j-1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i]?.[j+1] == undefined && boardStoneColour[i+1]?.[j] !== undefined && boardStoneColour[i-1]?.[j] !== undefined){
                nextStoneGroup = [0,boardStoneGroupBlack[i+1][j],boardStoneGroupBlack[i-1][j],boardStoneGroupBlack[i][j-1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i]?.[j-1] == undefined && boardStoneColour[i+1]?.[j] !== undefined && boardStoneColour[i-1]?.[j] !== undefined){
                nextStoneGroup = [0,boardStoneGroupBlack[i+1][j],boardStoneGroupBlack[i-1][j],boardStoneGroupBlack[i][j+1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i+1]?.[j] !== undefined && boardStoneColour[i-1]?.[j] !== undefined && boardStoneColour[i]?.[j+1] !== undefined && boardStoneColour[i]?.[j-1] !== undefined && boardStoneColour[i-1]?.[j-1] !== undefined){
                nextStoneGroup = [boardStoneGroupBlack[i+1][j],boardStoneGroupBlack[i-1][j],boardStoneGroupBlack[i][j+1],boardStoneGroupBlack[i][j-1]]
                return nextStoneGroup
            }
        }
        if (boardStoneColour[i][j] == WHITE){ 
            if (boardStoneColour[i+1]?.[j] == undefined && boardStoneColour[i]?.[j+1] == undefined){
                    nextStoneGroup = [0,boardStoneGroupWhite[i-1][j],0,boardStoneGroupWhite[i][j-1]]
                    return nextStoneGroup
            }
            if (boardStoneColour[i+1]?.[j] == undefined && boardStoneColour[i]?.[j-1] == undefined){
                nextStoneGroup = [0,boardStoneGroupWhite[i-1][j],boardStoneGroupWhite[i][j+1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i-1]?.[j] == undefined && boardStoneColour[i]?.[j+1] == undefined){
                nextStoneGroup = [0,boardStoneGroupWhite[i+1][j],0,boardStoneGroupWhite[i][j-1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i-1]?.[j] == undefined && boardStoneColour[i]?.[j-1] == undefined){
                nextStoneGroup = [0,boardStoneGroupWhite[i+1][j],boardStoneGroupWhite[i][j+1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i+1]?.[j] == undefined && boardStoneColour[i]?.[j+1] !== undefined && boardStoneColour[i]?.[j-1] !== undefined){
                nextStoneGroup = [0,boardStoneGroupWhite[i-1][j],boardStoneGroupWhite[i][j+1],boardStoneGroupWhite[i][j-1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i-1]?.[j] == undefined && boardStoneColour[i]?.[j+1] !== undefined && boardStoneColour[i]?.[j-1] !== undefined){
                nextStoneGroup = [0,boardStoneGroupWhite[i+1][j],boardStoneGroupWhite[i][j+1],boardStoneGroupWhite[i][j-1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i]?.[j+1] == undefined && boardStoneColour[i+1]?.[j] !== undefined && boardStoneColour[i-1]?.[j] !== undefined){
                nextStoneGroup = [0,boardStoneGroupWhite[i+1][j],boardStoneGroupWhite[i-1][j],boardStoneGroupWhite[i][j-1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i]?.[j-1] == undefined && boardStoneColour[i+1]?.[j] !== undefined && boardStoneColour[i-1]?.[j] !== undefined){
                nextStoneGroup = [0,boardStoneGroupWhite[i+1][j],boardStoneGroupWhite[i-1][j],boardStoneGroupWhite[i][j+1]]
                return nextStoneGroup
            }
            if (boardStoneColour[i+1]?.[j] !== undefined && boardStoneColour[i-1]?.[j] !== undefined && boardStoneColour[i]?.[j+1] !== undefined && boardStoneColour[i]?.[j-1] !== undefined && boardStoneColour[i-1]?.[j-1] !== undefined){
                nextStoneGroup = [boardStoneGroupWhite[i+1][j],boardStoneGroupWhite[i-1][j],boardStoneGroupWhite[i][j+1],boardStoneGroupWhite[i][j-1]]
                return nextStoneGroup
            }
        }
    }


    //addStoneGroup functions for Black and White seperate. Checks if adjacent to any friendly stone based on StoneGorup Number.
    //If next to friendly, assigns group number same as adjacent one.
    //If next to multiple friendlies, assign highest group number. This is followed by changeGroupNumber to change group number of other friendlies.
    //If next to no friendly, assigned new group number. The total counter ticks up 1 every assignment. 

    let stoneGroupCountBlack = 1;
    function addStoneGroupBlack(i,j) {
        let nextStoneGroupArray = [];
        nextStoneGroupArray = checkHighestGroup(i,j)
        let nextStoneGroupArraySum = nextStoneGroupArray.reduce((accumulator, currentValue) => accumulator + currentValue)
        if (nextStoneGroupArraySum > 0){
            boardStoneGroupBlack[i][j] = nextStoneGroupArray[0]
        }
        else {
            boardStoneGroupBlack[i][j] = stoneGroupCountBlack;
            stoneGroupCountBlack += 1;
        }
    }

    let stoneGroupCountWhite = 1;
    function addStoneGroupWhite(i,j) {
        let nextStoneGroupArray = [];
        nextStoneGroupArray = checkHighestGroup(i,j)
        let nextStoneGroupArraySum = nextStoneGroupArray.reduce((accumulator, currentValue) => accumulator + currentValue)
        if (nextStoneGroupArraySum > 0){
            boardStoneGroupWhite[i][j] = nextStoneGroupArray[0]
        }
        else {
            boardStoneGroupWhite[i][j] = stoneGroupCountWhite;
            stoneGroupCountWhite += 1;
        }
    }


    //Re-assigns stone group number to all stones surrounding, to match that of highest.
    //If any neighbouring stone group number is re-assigned, it then checks if it's next to other stones. 
    //If neighbour of neighbouring stones have differnet group number, then group number is re-assigned. This is repeated.

    function changeGroupNumber(i,j){
        let nextStoneGroupArray = [];
        nextStoneGroupArray = checkHighestGroup(i,j)
        if (nextStoneGroupArray[0] > nextStoneGroupArray[1] || nextStoneGroupArray[0] > nextStoneGroupArray[2] || nextStoneGroupArray[0] > nextStoneGroupArray[3]) {
            if (boardStoneColour[i][j] == BLACK) {
                changeGroupNumberBlackUp(i,j)
                changeGroupNumberBlackDown(i,j)
                changeGroupNumberBlackLeft(i,j)
                changeGroupNumberBlackRight(i,j)
            }
            if (boardStoneColour[i][j] == WHITE) {
                changeGroupNumberWhiteUp(i,j)
                changeGroupNumberWhiteDown(i,j)
                changeGroupNumberWhiteLeft(i,j)
                changeGroupNumberWhiteRight(i,j)
            }
        }
    }
    
    function changeGroupNumberBlackUp (i,j) {
        if (boardStoneGroupBlack[i+1]?.[j] > 0 && boardStoneGroupBlack[i][j] > boardStoneGroupBlack[i+1]?.[j]){
            boardStoneGroupBlack[i+1][j] = boardStoneGroupBlack[i][j]
            changeGroupNumberBlackUp(i+1,j)
            changeGroupNumberBlackLeft(i+1,j)
            changeGroupNumberBlackRight(i+1,j)
        }
    }

    function changeGroupNumberBlackDown (i,j) {
        if (boardStoneGroupBlack[i-1]?.[j] > 0 && boardStoneGroupBlack[i][j] > boardStoneGroupBlack[i-1]?.[j]){
            boardStoneGroupBlack[i-1][j] = boardStoneGroupBlack[i][j]
            changeGroupNumberBlackDown(i-1,j)
            changeGroupNumberBlackLeft(i-1,j)
            changeGroupNumberBlackRight(i-1,j)
        }
    }
    function changeGroupNumberBlackLeft (i,j) {
        if (boardStoneGroupBlack[i]?.[j+1] > 0 && boardStoneGroupBlack[i][j] > boardStoneGroupBlack[i]?.[j+1]){
            boardStoneGroupBlack[i][j+1] = boardStoneGroupBlack[i][j]
            changeGroupNumberBlackUp(i,j+1)
            changeGroupNumberBlackDown(i,j+1)
            changeGroupNumberBlackLeft(i,j+1)
        }
    }
    function changeGroupNumberBlackRight (i,j) {
        if (boardStoneGroupBlack[i]?.[j-1] > 0 && boardStoneGroupBlack[i][j] > boardStoneGroupBlack[i]?.[j-1]){
            boardStoneGroupBlack[i][j-1] = boardStoneGroupBlack[i][j]
            changeGroupNumberBlackUp(i,j-1)
            changeGroupNumberBlackDown(i,j-1)
            changeGroupNumberBlackRight(i,j-1)
        }
    }

    function changeGroupNumberWhiteUp (i,j) {
        if (boardStoneGroupWhite[i+1]?.[j] > 0 && boardStoneGroupWhite[i][j] > boardStoneGroupWhite[i+1]?.[j]){
            boardStoneGroupWhite[i+1][j] = boardStoneGroupWhite[i][j]
            changeGroupNumberWhiteUp(i+1,j)
            changeGroupNumberWhiteLeft(i+1,j)
            changeGroupNumberWhiteRight(i+1,j)
        }
    }

    function changeGroupNumberWhiteDown (i,j) {
        if (boardStoneGroupWhite[i-1]?.[j] > 0 && boardStoneGroupWhite[i][j] > boardStoneGroupWhite[i-1]?.[j]){
            boardStoneGroupWhite[i-1][j] = boardStoneGroupWhite[i][j]
            changeGroupNumberWhiteDown(i-1,j)
            changeGroupNumberWhiteLeft(i-1,j)
            changeGroupNumberWhiteRight(i-1,j)
        }
    }
    function changeGroupNumberWhiteLeft (i,j) {
        if (boardStoneGroupWhite[i]?.[j+1] > 0 && boardStoneGroupWhite[i][j] > boardStoneGroupWhite[i]?.[j+1]){
            boardStoneGroupWhite[i][j+1] = boardStoneGroupWhite[i][j]
            changeGroupNumberWhiteUp(i,j+1)
            changeGroupNumberWhiteDown(i,j+1)
            changeGroupNumberWhiteLeft(i,j+1)
        }
    }
    function changeGroupNumberWhiteRight (i,j) {
        if (boardStoneGroupWhite[i]?.[j-1] > 0 && boardStoneGroupWhite[i][j] > boardStoneGroupWhite[i]?.[j-1]){
            boardStoneGroupWhite[i][j-1] = boardStoneGroupWhite[i][j]
            changeGroupNumberWhiteUp(i,j-1)
            changeGroupNumberWhiteDown(i,j-1)
            changeGroupNumberWhiteRight(i,j-1)
        }
    }


})();
