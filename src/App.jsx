import {useState}  from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {

    const [activePlayer, setActivePlayer] = useState("X");

    function handleSelectSquare(rowIndex, colIndex){
        setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialPlayerName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
                    <Player initialPlayerName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
            </div>


            LOG
        </main>
    )
}

export default App
