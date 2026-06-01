import { useState } from 'react';
import { Fragment } from 'react';
import MenuButton from "./menu-button";
import FormSection from './form-section';
import CvSidebar from './cv-sidebar';
import CvMain from './cv-main';

const menuIcons = {
    person: <img src="src/assets/person.svg"></img>,
    briefcase: <img src="src/assets/briefcase.svg"></img>,
    dots: <img src="src/assets/dots.svg"></img>,
    education: <img src="src/assets/education.svg"></img>,
    folder: <img src="src/assets/folder.svg"></img>,
}

// base ids for form entry keys
const baseIds = {
    baseEdu: crypto.randomUUID(),
    baseProj: crypto.randomUUID(),
    baseExp: crypto.randomUUID(),
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
            const splitSkills = e.target.value.split(",").map(skill => skill.trim()).filter(skill => skill !== "").map(s => ({id: crypto.randomUUID(), text: s}));
            setSkillsList(splitSkills);
        }
        else setSkillsList([]);
    }
    const [certsList, setCertsList] = useState([]);
    const updateCertsList = (e) => {
        if(e.target.value) {
            const splitCerts = e.target.value.split(",").map(cert => cert.trim()).filter(cert => cert !== "").map(c => ({id: crypto.randomUUID(), text: c}));
            setCertsList(splitCerts);
        } 
        else setCertsList([])
    }
    const changeOtherInfo = (e, type) => {
        if(type === "skills") updateSkillsList(e);
        else if(type === "certs") updateCertsList(e);
    }

    const [experienceList, setExperienceList] = useState([{companyName: null, positionTitle: null, startDate: null, endDate: null, description: null, id: baseIds.baseExp}]);
    const newExp = (uuid) => {
        setExperienceList([...experienceList, {companyName: null, positionTitle: null, startDate: null, endDate: null, description: null, id: uuid}]);
    }
    const delExp = (uuid) => {
        setExperienceList(experienceList.filter(exp => exp.id !== uuid));
    }
    const changeExp = (e, uuid, type) => {
        let newObj;
        for(let exp of experienceList) {
            if(exp.id === uuid) {
                newObj = exp;
                break;
            }
        }
        if(type === "companyName") newObj = {...newObj, companyName: e.target.value};
        else if(type === "positionTitle") newObj = {...newObj, positionTitle: e.target.value};
        else if(type === "startDate") newObj = {...newObj, startDate: e.target.value};
        else if(type === "endDate") newObj = {...newObj, endDate: e.target.value};
        else if(type === "description") newObj = {...newObj, description: e.target.value};
        const filteredExpList = experienceList.filter(exp => exp.id !== uuid);
        setExperienceList([...filteredExpList, newObj]);
    }

    const buttonInfo = [
        {icon: menuIcons.person, text: "Personal Info", id: 1, handleChange: changePersonalInfo, addButtonAction: null, delButtonAction: null},
        {icon: menuIcons.briefcase, text: "Experience", id: 2, handleChange: changeExp, addButtonAction: newExp, delButtonAction: delExp},
        {icon: menuIcons.education, text: "Education", id: 3, handleChange: null, addButtonAction: null, delButtonAction: null},
        {icon: menuIcons.folder, text: "Projects", id: 4, handleChange: null, addButtonAction: null, delButtonAction: null},
        {icon: menuIcons.dots, text: "Other Info", id: 5, handleChange: changeOtherInfo, addButtonAction: null, delButtonAction: null}
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
                            addButtonAction={info.addButtonAction}
                            delButtonAction={info.delButtonAction}
                            baseIds={baseIds}
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
                        <CvSidebar personalInfo={personalInfo} skillsList={skillsList} certsList={certsList}></CvSidebar>
                        <CvMain experienceList={experienceList}></CvMain>
                    </section>
                </div> 
            </main>
        </main>
    );
}