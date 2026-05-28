export default function Education({uuid, remove}) {
    return (
        <div className="subform">
            <button type="button" className="deleteButton" onClick={remove}>x</button>
            <label htmlFor={`schoolName${uuid}`} className="fullLineLabel">
                School Name
                <input type="text" id={`schoolName${uuid}`} name={`schoolName${uuid}`} placeholder="Harvard University"></input>
            </label>
            <label htmlFor={`degree${uuid}`} className="fullLineLabel">
                Degree
                <input type="text" id={`degree${uuid}`} name={`degree${uuid}`} placeholder="Computer Science B.S."></input>
            </label>
            <label htmlFor={`gradYear${uuid}`}>
                Graduation Year
                <input type="text" id={`gradYear${uuid}`} name={`gradYear${uuid}`} placeholder="2025"></input>
            </label>
            <label htmlFor={`gpa${uuid}`}>
                GPA
                <input type="text" id={`gpa${uuid}`} name={`gpa${uuid}`} placeholder="3.7"></input>
            </label>
        </div>
    )
}