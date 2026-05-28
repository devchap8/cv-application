export default function Experience({uuid, remove}) {
    return (
        <div className="subform">
            <button type="button" className="deleteButton" onClick={remove}>x</button>
            <label htmlFor={`companyName${uuid}`} className="fullLineLabel">
                School Name
                <input type="text" id={`companyName${uuid}`} name={`companyName${uuid}`}></input>
            </label>
            <label htmlFor={`jobTitle${uuid}`} className="fullLineLabel">
                Degree
                <input type="text" id={`jobTitle${uuid}`} name={`jobTitle${uuid}`}></input>
            </label>
            <label htmlFor={`startDate${uuid}`}>
                Graduation Year
                <input type="text" id={`startDate${uuid}`} name={`startDate${uuid}`}></input>
            </label>
            <label htmlFor={`endDate${uuid}`}>
                GPA
                <input type="text" id={`endDate${uuid}`} name={`endDate${uuid}`}></input>
            </label>
            <label htmlFor={`projectDesc${uuid}`} className="fullLineLabel">
                Description:
                <textarea></textarea>
            </label>
        </div>
    )
}