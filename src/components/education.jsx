export default function Education({uuid, remove}) {
    return (
        <div className="subform">
            <button type="button" className="deleteButton" onClick={remove}>x</button>
            <label htmlFor={`schoolName${uuid}`} className="fullLineLabel">
                School Name
                <input type="text" id={`schoolName${uuid}`} name={`schoolName${uuid}`}></input>
            </label>
            <label htmlFor={`degree${uuid}`} className="fullLineLabel">
                Degree
                <input type="text" id={`degree${uuid}`} name={`degree${uuid}`}></input>
            </label>
            <label htmlFor={`gradYear${uuid}`}>
                Graduation Year
                <input type="text" id={`gradYear${uuid}`} name={`gradYear${uuid}`}></input>
            </label>
            <label htmlFor={`gpa${uuid}`}>
                GPA
                <input type="text" id={`gpa${uuid}`} name={`gpa${uuid}`}></input>
            </label>
        </div>
    )
}