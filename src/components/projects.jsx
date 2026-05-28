export default function Project({uuid, remove}) {
    return (
        <div className="subform">
            <button type="button" className="deleteButton" onClick={remove}>x</button>
            <label htmlFor={`projectTitle${uuid}`} className="fullLineLabel">
                Project Name
                <input type="text" id={`projectTitle${uuid}`} name={`projectTitle${uuid}`} placeholder="CV Builder App"></input>
            </label>
            <label htmlFor={`projectLink${uuid}`} className="fullLineLabel">
                Link
                <input type="text" id={`projectLink${uuid}`} name={`projectLink${uuid}`} placeholder="github.com/username/project"></input>
            </label>
            <label htmlFor={`projectDesc${uuid}`} className="fullLineLabel">
                Description
                <textarea id={`projectDesc${uuid}`} name={`projectDesc${uuid}`} placeholder="React program where users input info and a CV is generated in real time"></textarea>
            </label>
        </div>
    )
}