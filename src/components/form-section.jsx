export default function FormSection({display, id}) {
    if(id === 1) {return ( // personal info
        <form className={display ? "" : "hidden"}>
            <label htmlFor="fullName" className="fullLineLabel">
                Name
                <input type="text" id="fullName" name="fullName"></input>
            </label> 
            <label htmlFor="phoneNumber">
                Phone Number
                <input type="tel" id="phoneNumber" name="phoneNumber"></input> 
            </label> 
            <label htmlFor="email">
                Email
                <input type="email" name="email" id="email"></input>
            </label> 
            <label htmlFor="location" className="fullLineLabel">
                Location
                <input type="text" id="location" name="location"></input>
            </label> 
            <label htmlFor="website" className="fullLineLabel">
                Website Link
                <input type="text" id="website" name="website"></input>
            </label>
        </form>
    )} else if(id === 2) {return ( // experience
        null
    )} else if(id === 3) {return ( // education
        null
    )} else if(id === 4) {return ( // projects
        null
    )} else if(id === 5) {return ( // other info
        <form className={display ? "" : "hidden"}>
            <label htmlFor="skills" className="fullLineLabel">
                Skills
                <input type="text" id="skills" name="skills"></input>
                <div className="labelFootnote">Separate with commas</div>
            </label>
            <label htmlFor="certs" className="fullLineLabel">
                Certifications <i>(Optional)</i>
                <input type="text" id="certs" name="certs"></input>
            </label>
        </form>
    )}
}