import { useState } from 'react';
import Education from "./education"
import Experience from './experience';
import Project from './projects';

const baseEdu = crypto.randomUUID();
const baseProj = crypto.randomUUID();
const baseExp = crypto.randomUUID();

export default function FormSection({display, id}) {
    const [eduList, setEduList] = useState([baseEdu]);
    const newEdu = () => setEduList([...eduList, crypto.randomUUID()]);
    const deleteEdu = (uuid) => setEduList(eduList.filter(id => id !== uuid));

    const [projList, setProjList] = useState([baseProj]);
    const newProj = () => setProjList([...projList, crypto.randomUUID()]);
    const deleteProj = (uuid) => setProjList(projList.filter(id => id !== uuid));

    const [expList, setExpList] = useState([baseExp]);
    const newExp = () => setExpList([...expList, crypto.randomUUID()]);
    const deleteExp = (uuid) => setExpList(expList.filter(id => id !== uuid));

    if(id === 1) {return ( // personal info
        <form className={display ? "" : "hidden"}>
            <label htmlFor="fullName" className="fullLineLabel">
                Name
                <input type="text" id="fullName" name="fullName" placeholder='John Smith'></input>
            </label> 
            <label htmlFor="phoneNumber">
                Phone Number
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder='(999) 123-4567'></input> 
            </label> 
            <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" placeholder='email@example.com'></input>
            </label> 
            <label htmlFor="location" className="fullLineLabel">
                Location
                <input type="text" id="location" name="location" placeholder='New York City, New York, USA'></input>
            </label> 
            <label htmlFor="website" className="fullLineLabel">
                Website Link
                <input type="text" id="website" name="website" placeholder='yourwebsite.com'></input>
            </label>
        </form>

    )} else if(id === 2) {return ( // experience
        <form className={display ? "" : "hidden"}>
            {expList.map(expId => <Experience uuid={expId} key={expId} remove={() => deleteExp(expId)}></Experience>)}
            <footer className="formFooter">
                <button type="button" className="newFieldButton" onClick={newExp}>+ New Experience Field</button>
            </footer>
        </form>

    )} else if(id === 3) {return ( // education
        <form className={display ? "" : "hidden"}>
            {eduList.map(eduId => <Education uuid={eduId} key={eduId} remove={() => deleteEdu(eduId)}></Education>)}
            <footer className="formFooter">
                <button type="button" className="newFieldButton" onClick={newEdu}>+ New Education Field</button>
            </footer>
        </form>

    )} else if(id === 4) {return ( // projects
        <form className={display ? "" : "hidden"}>
            {projList.map(projId => <Project uuid={projId} key={projId} remove={() => deleteProj(projId)}></Project>)}
            <footer className="formFooter">
                <button type="button" className="newFieldButton" onClick={newProj}>+ New Project Field</button>
            </footer>
        </form>

    )} else if(id === 5) {return ( // other info
        <form className={display ? "" : "hidden"}>
            <label htmlFor="skills" className="fullLineLabel">
                Skills
                <input type="text" id="skills" name="skills" placeholder='HTML, CSS, Javascript'></input>
                <div className="labelFootnote">Separate with commas</div>
            </label>
            <label htmlFor="certs" className="fullLineLabel">
                Certifications <i>(Optional)</i>
                <input type="text" id="certs" name="certs" placeholder='AWS Certified Developer - Associate'></input>
            </label>
        </form>
    )}
}