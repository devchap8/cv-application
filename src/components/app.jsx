import { useState } from 'react';
import { Fragment } from 'react';
import MenuButton from "./menu-button";
import FormSection from './form-section';
import CvSidebar from './cv-sidebar';
import CvMain from './cv-main';

import personSvg from "../assets/person.svg";
import briefCaseSvg from "../assets/briefcase.svg";
import dotsSvg from "../assets/dots.svg";
import educationSvg from "../assets/education.svg";
import folderSvg from "../assets/folder.svg";
const menuIcons = {
    person: <img src={personSvg}></img>,
    briefcase: <img src={briefCaseSvg}></img>,
    dots: <img src={dotsSvg}></img>,
    education: <img src={educationSvg}></img>,
    folder: <img src={folderSvg}></img>,
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
    const delExp = (uuid) => setExperienceList(experienceList.filter(exp => exp.id !== uuid));
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

    const [projectList, setProjectList] = useState([{name: null, link: null, description: null, id: baseIds.baseProj}]);
    const newProj = (uuid) => setProjectList([...projectList, {name: null, link: null, description: null, id: uuid}]);
    const delProj = (uuid) => setProjectList(projectList.filter(proj => proj.id !== uuid));
    const changeProj = (e, uuid, type) => {
        let newObj;
        for(let proj of projectList) {
            if(proj.id === uuid) {
                newObj = proj;
                break;
            }
        }
        if(type === "projectName") newObj = {...newObj, name: e.target.value};
        else if(type === "projectLink") newObj = {...newObj, link: e.target.value};
        else if(type === "projectDescription") newObj = {...newObj, description: e.target.value};
        const filteredProjList = projectList.filter(proj => proj.id !== uuid);
        setProjectList([...filteredProjList, newObj]);
    }

    const [educationList, setEducationList] = useState([{school: null, degree: null, gradYear: null, gpa: null, id: baseIds.baseEdu}]);
    const newEdu = (uuid) => setEducationList([...educationList, {school: null, degree: null, gradYear: null, gpa: null, id: uuid}]);
    const delEdu = (uuid) => setEducationList(educationList.filter(edu => edu.id !== uuid));
    const changeEdu = (e, uuid, type) => {
        let newObj;
        for(let edu of educationList) {
            if(edu.id === uuid) {
                newObj = edu;
                break;
            }
        }
        if(type === "school") newObj = {...newObj, school: e.target.value};        
        else if(type === "degree") newObj = {...newObj, degree: e.target.value};
        else if(type === "gradYear") newObj = {...newObj, gradYear: e.target.value};
        else if(type === "gpa") newObj = {...newObj, gpa: e.target.value};
        const filteredEduList = educationList.filter(edu => edu.id !== uuid);
        setEducationList([...filteredEduList, newObj]);
    }

    const buttonInfo = [
        {icon: menuIcons.person, text: "Personal Info", id: 1, handleChange: changePersonalInfo, addButtonAction: null, delButtonAction: null},
        {icon: menuIcons.briefcase, text: "Experience", id: 2, handleChange: changeExp, addButtonAction: newExp, delButtonAction: delExp},
        {icon: menuIcons.education, text: "Education", id: 3, handleChange: changeEdu, addButtonAction: newEdu, delButtonAction: delEdu},
        {icon: menuIcons.folder, text: "Projects", id: 4, handleChange: changeProj, addButtonAction: newProj, delButtonAction: delProj},
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
                        <CvMain experienceList={experienceList} projectList={projectList} educationList={educationList}></CvMain>
                    </section>
                </div> 
            </main>
        </main>
    );
}