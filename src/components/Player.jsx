import {useState} from "react";

export default function Player ({playerName, symbol}){
    const [isEditing, setIsEditing] = useState(false);

    function handleEditing(){
        setIsEditing((editing) => !editing);
    }

    let playerNameInput = <span className="player-name">
                    {playerName}
                </span>;

    if(isEditing){
        playerNameInput = <input type="text" required defaultValue={playerName}/>;
    }

    return (
        <li>
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