export default function CvEducation({self}) {
    return (
        <div className="cvMainEntry">
            <h3 className="cvEntryTitle">
                <p className="cvEntryTitleMain">{self.degree}</p> 
                {self.school !== null && self.school !== "" && " @ "}  
                <p className="cvEntryTitleSecond">{self.school}</p>
            </h3>
            {/* <div className="cvEntryMuted">{self.gradYear}</div>
            <div className="cvEntryMuted">{self.gpa !== null && self.gpa !== "" && `GPA: ${self.gpa}`}</div> */}
            <div className="cvEntryMuted">
                {self.gpa !== null && self.gpa !== "" && `GPA: ${self.gpa}`}
                {self.gpa !== null && self.gpa !== "" && self.gradYear !== null && self.gradYear !== "" && ", "}&nbsp;
                {self.gradYear !== null && self.gradYear !== "" && self.gradYear}
            </div>
        </div>
    )
}