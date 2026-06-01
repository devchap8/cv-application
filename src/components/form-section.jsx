import { useState } from 'react';
import Education from "./education"
import Experience from './experience';
import Project from './projects';

export default function FormSection({display, id, handleChange, addButtonAction, delButtonAction, baseIds}) {
    const [eduList, setEduList] = useState([baseIds.baseEdu]);
    const newEdu = () => setEduList([...eduList, crypto.randomUUID()]);
    const deleteEdu = (uuid) => setEduList(eduList.filter(id => id !== uuid));

    const [projList, setProjList] = useState([baseIds.baseProj]);
    const newProj = () => setProjList([...projList, crypto.randomUUID()]);
    const deleteProj = (uuid) => setProjList(projList.filter(id => id !== uuid));

    const [expList, setExpList] = useState([baseIds.baseExp]);
    const newExp = () => {
        const uuid = crypto.randomUUID()
        setExpList([...expList, uuid]);
        addButtonAction(uuid);
    }
    const deleteExp = (uuid) => {
        setExpList(expList.filter(id => id !== uuid));
        delButtonAction(uuid);
    }

    if(id === 1) {return ( // personal info
        <form className={display ? "" : "hidden"}>
            <label htmlFor="fullName" className="fullLineLabel">
                Name
                <input type="text" id="fullName" name="fullName" placeholder='John Smith' onChange={(e) => handleChange(e, "name")}></input>
            </label> 
            <label htmlFor="phoneNumber">
                Phone Number
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder='(999) 123-4567' onChange={(e) => handleChange(e, "phone")}></input> 
            </label> 
            <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" placeholder='email@example.com' onChange={(e) => handleChange(e, "email")}></input>
            </label> 
            <label htmlFor="location" className="fullLineLabel">
                Location
                <input type="text" id="location" name="location" placeholder='New York City, New York, USA' onChange={(e) => handleChange(e, "location")}></input>
            </label> 
            <label htmlFor="website" className="fullLineLabel">
                Website Link
                <input type="text" id="website" name="website" placeholder='yourwebsite.com' onChange={(e) => handleChange(e, "link")}></input>
            </label>
        </form>

    )} else if(id === 2) {return ( // experience
        <form className={display ? "" : "hidden"}>
            {expList.map(expId => <Experience uuid={expId} key={expId} remove={() => deleteExp(expId)} handleChange={handleChange}></Experience>)}
            <footer className="formFooter">
                <button type="button" className="newFieldButton" onClick={newExp}>+ New Experience Field</button>
            </footer>
        </form>

    )} else if(id === 3) {return ( // education
        <form className={display ? "" : "hidden"}>
            {eduList.map(eduId => <Education uuid={eduId} key={eduId} remove={() => deleteEdu(eduId)} handleChange={handleChange}></Education>)}
            <footer className="formFooter">
                <button type="button" className="newFieldButton" onClick={newEdu}>+ New Education Field</button>
            </footer>
        </form>

    )} else if(id === 4) {return ( // projects
        <form className={display ? "" : "hidden"}>
            {projList.map(projId => <Project uuid={projId} key={projId} remove={() => deleteProj(projId)} handleChange={handleChange}></Project>)}
            <footer className="formFooter">
                <button type="button" className="newFieldButton" onClick={newProj}>+ New Project Field</button>
            </footer>
        </form>

    )} else if(id === 5) {return ( // other info
        <form className={display ? "" : "hidden"}>
            <label htmlFor="skills" className="fullLineLabel">
                Skills
                <input type="text" id="skills" name="skills" placeholder='HTML, CSS, Javascript' onChange={(e) => handleChange(e, "skills")}></input>
                <div className="labelFootnote">Separate with commas</div>
            </label>
            <label htmlFor="certs" className="fullLineLabel">
                Certifications <i>(Optional)</i>
                <input type="text" id="certs" name="certs" placeholder='AWS Certified Developer - Associate' onChange={(e) => handleChange(e, "certs")}></input>
                <div className="labelFootnote">Separate with commas</div>
            </label>
        </form>
    )}
}