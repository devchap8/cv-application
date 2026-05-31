import CvSidebar from './cv-sidebar';
import { useState } from 'react';
import { Fragment } from 'react';
import MenuButton from "./menu-button";
import FormSection from './form-section';

const menuIcons = {
    person: <img src="src/assets/person.svg"></img>,
    briefcase: <img src="src/assets/briefcase.svg"></img>,
    dots: <img src="src/assets/dots.svg"></img>,
    education: <img src="src/assets/education.svg"></img>,
    folder: <img src="src/assets/folder.svg"></img>,
}

export default function App() {    
    // selected id for sidebar buttons
    const [selectedId, setSelectedId] = useState(null);

    // form text updating cv in real time
    const [personalInfo, setPersonalInfo] = useState({name: null, email: null, phone: null, location: null, link: null});
    const changePersonalInfo = (e, type) => {
        if(type === "name") setPersonalInfo({...personalInfo, name: e.target.value});
        else if(type === "email") setPersonalInfo({...personalInfo, email: e.target.value});
        else if(type === "phone") setPersonalInfo({...personalInfo, phone: e.target.value});
        else if(type === "location") setPersonalInfo({...personalInfo, location: e.target.value});
        else if(type === "link") setPersonalInfo({...personalInfo, link: e.target.value});
    }

    const [skillsList, setSkillsList] = useState([]);
    const updateSkillsList = (e) => {
        if(e.target.value) {
            const splitSkills = e.target.value.split(",").map(skill => skill.trim()).filter(skill => skill !== "");
            setSkillsList(splitSkills);
        }
        else setSkillsList([]);
    }

    const changeOtherInfo = (e, type) => {
        if(type === "skills") updateSkillsList(e);
        else if(type === "certs") return null;
    }

    const buttonInfo = [
        {icon: menuIcons.person, text: "Personal Info", id: 1, handleChange: changePersonalInfo},
        {icon: menuIcons.briefcase, text: "Experience", id: 2, handleChange: null},
        {icon: menuIcons.education, text: "Education", id: 3, handleChange: null},
        {icon: menuIcons.folder, text: "Projects", id: 4, handleChange: null},
        {icon: menuIcons.dots, text: "Other Info", id: 5, handleChange: changeOtherInfo}
    ];

    return (
        <main>
            <section className="sidebar">
                <h1>Pro CV</h1>
                <h2>Enter your information</h2>
                <div className="sidebarMain">
                    {buttonInfo.map(info => 
                    <Fragment key={info.id}>
                        <MenuButton 
                            icon={info.icon} 
                            text={info.text} 
                            isSelected={info.id === selectedId}
                            handleClick={() => selectedId === info.id ? setSelectedId(null) : setSelectedId(info.id)}
                        ></MenuButton>
                        
                        <FormSection
                            display={info.id === selectedId}
                            id={info.id}
                            handleChange={info.handleChange}
                        ></FormSection>
                    </Fragment>
                    )}
                </div>
            </section>
            <main className="cvContainer"> 
                <div className="cv">
                    <header className="cvHeader">
                        {personalInfo.name ? personalInfo.name : <div className="nullInfo">Your Name</div>}
                    </header>
                    <section className="cvBottom">
                        <CvSidebar personalInfo={personalInfo} skillsList={skillsList}></CvSidebar>
                        <div className="cvMain">Main</div>
                    </section>
                </div> 
            </main>
        </main>
    );
}