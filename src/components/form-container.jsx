import '../styles/form-container.css';
import EnterInfo from './enter-info';
import EnterEdu from './enter-edu';
import EnterExperience from './enter-experience';
import { useState } from 'react'

export default function FormContainer({sendCvData}) {

    const [expSections, setExpSections] = useState([<EnterExperience sectionCount={1} key={1}></EnterExperience>]);
    const handleExpButtonClick = () => {
        setExpSections([...expSections, <EnterExperience sectionCount={expSections.length + 1} key={expSections.length + 1}></EnterExperience>])
        console.log(expSections);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        sendCvData(data);
    }

    return (
        <form className="formContainer" onSubmit={handleSubmit}>
            <h1>Enter Your Information</h1>
            <EnterInfo></EnterInfo>
            <EnterEdu></EnterEdu>
            <button onClick={handleExpButtonClick} type="button">Add Experience Section</button>
            {expSections}
            <button className="submitButton">Submit</button>
        </form>
    );

}