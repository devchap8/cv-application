import '../styles/form-container.css';
import EnterInfo from './enter-info';
import EnterEdu from './enter-edu';
import EnterExperience from './enter-experience';

export default function FormContainer({sendCvData}) {

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
            <EnterExperience></EnterExperience>
            <button className="submitButton">Submit</button>
        </form>
    );

}