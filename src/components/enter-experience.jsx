import '../styles/enter-experience.css';

export default function EnterExperience({sectionCount}) {
    const formFields = [`companyName${sectionCount}`, `positionName${sectionCount}`, `startDate${sectionCount}`,
        `endDate${sectionCount}`, `expDescription${sectionCount}`
    ];
    return (
        <section className="enterExperienceSection formSection">
            {sectionCount === 1 && <h2 className="sectionHeader">Experience:</h2>}
            <label htmlFor={formFields[0]}>Company Name:</label><br/>
            <input type="text" id={formFields[0]} name={formFields[0]}></input><br/>
            <label htmlFor={formFields[1]}>Position Name:</label><br/>
            <input type="text" id={formFields[1]} name={formFields[1]}></input><br/>
            <label htmlFor={formFields[2]}>Start Date:</label><br/>
            <input type="date" id={formFields[2]} name={formFields[2]}></input><br/>
            <label htmlFor={formFields[3]}>End Date:</label><br/>
            <input type="date" id={formFields[3]} name={formFields[3]}></input><br/>
            <label htmlFor={formFields[4]}>Description of Experience:</label><br/>
            <textarea name={formFields[4]} id={formFields[4]} rows="5" cols="35"></textarea><br/>
        </section>
    );
}