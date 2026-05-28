export default function MenuButton({icon, text, isSelected, handleClick}) {
    return (
        <button onClick={handleClick} className={isSelected ? "menuButton selectedButton" : "menuButton"}>
            {icon}
            {text}
            {isSelected ? <img src="src/assets/menu-down.svg"></img> : <img src="src/assets/menu-up.svg"></img>}
        </button>
        
    );
}

// icon, text content, id, id === selectedId