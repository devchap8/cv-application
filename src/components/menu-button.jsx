import menuUpSvg from "../assets/menu-up.svg";
import menuDownSvg from "../assets/menu-down.svg";

export default function MenuButton({icon, text, isSelected, handleClick}) {
    return (
        <button onClick={handleClick} className={isSelected ? "menuButton selectedButton" : "menuButton"}>
            {icon}
            {text}
            {isSelected ? <img src={menuDownSvg}></img> : <img src={menuUpSvg}></img>}
        </button>
        
    );
}

// icon, text content, id, id === selectedId