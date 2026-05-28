import { useState } from 'react';
import MenuButton from "./menu-button";

const menuIcons = {
    person: <img src="src/assets/person.svg"></img>,
    briefcase: <img src="src/assets/briefcase.svg"></img>,
    dots: <img src="src/assets/dots.svg"></img>,
    education: <img src="src/assets/education.svg"></img>,
    folder: <img src="src/assets/folder.svg"></img>,
}

const buttonInfo = [
    {icon: menuIcons.person, text: "Personal Info", id: 1},
    {icon: menuIcons.briefcase, text: "Experience", id: 2},
    {icon: menuIcons.education, text: "Education", id: 3},
    {icon: menuIcons.folder, text: "Projects", id: 4},
    {icon: menuIcons.dots, text: "Other Info", id: 5}
];



export default function App() {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <main>
            <section className="sidebar">
                <h1>Pro CV</h1>
                <h2>Enter your information</h2>
                <div className="sidebarMain">
                    {buttonInfo.map(info => 
                    <>
                    <MenuButton 
                        icon={info.icon} 
                        text={info.text} 
                        key={info.id}
                        isSelected={info.id === selectedId}
                        handleClick={() => selectedId === info.id ? setSelectedId(null) : setSelectedId(info.id)}
                    ></MenuButton>

                    </>
                    )}
                </div>
            </section>
            <main className="cvContainer"> Main here</main>
        </main>
    );
}