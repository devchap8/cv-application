import '../styles/enter-experience.css';

export default function EnterExperience() {
    return (
        <section className="enterExperienceSection formSection">
            <h2 className="sectionHeader">Experience:</h2>
            <label for="companyName">Company Name:</label><br/>
            <input type="text" for="companyName" name="companyName"></input><br/>
            <label for="positionName">Position Name:</label><br/>
            <input type="text" for="positionName" name="positionName"></input><br/>
            <label for="startDate">Start Date:</label><br/>
            <input type="date" id="startDate" name="startDate"></input><br/>
            <label for="endDate">End Date:</label><br/>
            <input type="date" id="endDate" name="endDate"></input><br/>
            <label for="expDescription">Description of Experience:</label><br/>
            <textarea name="expDescription" id="expDescription" rows="5" cols="35"></textarea><br/>
        </section>
    );
}