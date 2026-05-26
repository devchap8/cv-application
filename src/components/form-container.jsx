import '../styles/form-container.css';
import EnterInfo from './enter-info';
import EnterEdu from './enter-edu';
import EnterExperience from './enter-experience';

export default function FormContainer() {

    return (
        <form className="formContainer">
            <h1>Enter Your Information</h1>
            <EnterInfo></EnterInfo>
            <EnterEdu></EnterEdu>
            <EnterExperience></EnterExperience>
        </form>
    );

}