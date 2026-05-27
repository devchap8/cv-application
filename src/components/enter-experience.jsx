import '../styles/enter-experience.css';

export default function EnterExperience() {
    return (
        <section className="enterExperienceSection formSection">
            <h2 className="sectionHeader">Experience:</h2>
            <label htmlFor="companyName">Company Name:</label><br/>
            <input type="text" id="companyName" name="companyName"></input><br/>
            <label htmlFor="positionName">Position Name:</label><br/>
            <input type="text" id="positionName" name="positionName"></input><br/>
            <label htmlFor="startDate">Start Date:</label><br/>
            <input type="date" id="startDate" name="startDate"></input><br/>
            <label htmlFor="endDate">End Date:</label><br/>
            <input type="date" id="endDate" name="endDate"></input><br/>
            <label htmlFor="expDescription">Description of Experience:</label><br/>
            <textarea name="expDescription" id="expDescription" rows="5" cols="35"></textarea><br/>
        </section>
    );
}