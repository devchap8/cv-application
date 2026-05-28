export default function Project({uuid, remove}) {
    return (
        <div className="subform">
            <button type="button" className="deleteButton" onClick={remove}>x</button>
            <label htmlFor={`projectTitle${uuid}`} className="fullLineLabel">
                Project Name
                <input type="text" id={`projectTitle${uuid}`} name={`projectTitle${uuid}`}></input>
            </label>
            <label htmlFor={`projectLink${uuid}`} className="fullLineLabel">
                Link
                <input type="text" id={`projectLink${uuid}`} name={`projectLink${uuid}`}></input>
            </label>
            <label htmlFor={`projectDesc${uuid}`} className="fullLineLabel">
                Description
                <textarea id={`projectDesc${uuid}`} name={`projectDesc${uuid}`}></textarea>
            </label>
        </div>
    )
}