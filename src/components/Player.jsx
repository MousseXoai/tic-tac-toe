import {useState} from "react";

export default function Player ({initialPlayerName, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialPlayerName);

    function handleEditing(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let playerNameInput = <span className="player-name">
                    {playerName}
                </span>;

    if(isEditing){
        playerNameInput = <input type="text" required value={playerName} onChange={handleChange}/>;
    }

    return (
        <li className={isActive === true ? "active" : undefined}>
            <span className="player">
                <span className="player-name">
                    {playerNameInput}
                </span>
                <span className="player-symbol">
                    {symbol}
                </span>
            </span>
            <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}