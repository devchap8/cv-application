export default function EnterEdu() {
    return (
        <section className="enterEduSection formSection">
            <h2 className="sectionHeader">Education:</h2>
            <label for="schoolName">School Name:</label><br/>
            <input type="text" id="schoolName" name="schoolName"></input><br/>
            <label for="degrees">Title of Degree(s):</label><br/>
            <input type="text" id="degrees" name="degrees"></input><br/>
            <label for="gradDate">Graduation Date:</label><br/>
            <input type="date" id="gradDate" name="gradDate"></input><br/>
        </section>
    );
}