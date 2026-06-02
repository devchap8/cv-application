export default function CvEducation({self}) {
    return (
        <div className="cvMainEntry">
            <h3 className="cvEntryTitle">
                <p className="cvEntryTitleMain">{self.degree}</p> 
                {self.school !== null && self.school !== "" && " @ "}  
                <p className="cvEntryTitleSecond">{self.school}</p>
            </h3>
            <div className="cvEntryMuted">
                {self.gpa !== null && self.gpa !== "" && `${self.gpa}`}
                {self.gpa !== null && self.gpa !== "" && self.gradYear !== null && self.gradYear !== "" && <p>, &nbsp;</p>}
                {self.gradYear !== null && self.gradYear !== "" && self.gradYear}
            </div>
        </div>
    )
}