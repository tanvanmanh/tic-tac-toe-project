import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [ playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing] = useState(false);    

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
        
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing == false 
                    ? <span className="player-name">{playerName}</span> 
                    : <input type="text" required defaultValue={playerName} onChange={handleNameChange}/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
    
}