import { useState } from "react";

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing] = useState(false);
    const [ newName, setNewName] = useState(name);

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);
        
    }

    function handleNameChange() {
        
    }
    return (
        <li>
            <span className="player">
                {isEditing == false 
                    ? <span className="player-name">{name}</span> 
                    : <input type="text" required defaultValue={name} onChange={handleNameChange}/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
    
}