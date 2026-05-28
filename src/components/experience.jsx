export default function Experience({uuid, remove}) {
    return (
        <div className="subform">
            <button type="button" className="deleteButton" onClick={remove}>x</button>
            <label htmlFor={`companyName${uuid}`} className="fullLineLabel">
                Company Name
                <input type="text" id={`companyName${uuid}`} name={`companyName${uuid}`} placeholder="Microsoft"></input>
            </label>
            <label htmlFor={`jobTitle${uuid}`} className="fullLineLabel">
                Position Title
                <input type="text" id={`jobTitle${uuid}`} name={`jobTitle${uuid}`} placeholder="Junior Full Stack Developer"></input>
            </label>
            <label htmlFor={`startDate${uuid}`}>
                Start Date
                <input type="text" id={`startDate${uuid}`} name={`startDate${uuid}`} placeholder="June 2025"></input>
            </label>
            <label htmlFor={`endDate${uuid}`}>
                End Date
                <input type="text" id={`endDate${uuid}`} name={`endDate${uuid}`} placeholder="Current"></input>
            </label>
            <label htmlFor={`jobDesc${uuid}`} className="fullLineLabel">
                Description
                <textarea id={`jobDesc${uuid}`} name={`jobDesc${uuid}`} placeholder="Designed fluid user interfaces with React and Tailwind CSS"></textarea>
            </label>
        </div>
    )
}