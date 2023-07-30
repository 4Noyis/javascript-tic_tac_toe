



const gameBoard= (()=>{

    let gameboard=["","","","","","","","",""]
    
    const render= ()=>{
        let boardHTML=""
        gameboard.forEach((square,index)=>{
            boardHTML+=`<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector(".gameboard").innerHTML=boardHTML
    }
    return {render}
})();

const createPlayer=(name, mark)=>{
    return {name, mark}
}

const Game=(()=>{
    let players=[]
    let currentPlayerIndex;
    let gameOver=false

    const start =()=>{
        players=[
            createPlayer(document.querySelector("#player1-name").value,"X"),
            createPlayer(document.querySelector("#player2-name").value, "O")
        ]
        currentPlayerIndex=0
        gameOver=false
        gameBoard.render();
    }

    return {start,}
})()


const startButton = document.querySelector(".start-btn")
startButton.addEventListener("click", ()=>{ 
    Game.start()})

