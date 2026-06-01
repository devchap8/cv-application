export default function CvExperience({self}) {
    return (
        <div className="cvMainEntry">
            <h3 className="cvEntryTitle">
                <p className="cvEntryTitleMain">{self.positionTitle}</p> 
                {self.companyName !== null && self.companyName !== "" && " @ "}  
                <p className="cvEntryTitleSecond">{self.companyName}</p>
            </h3>
            <div className="cvEntryMuted">
                {self.startDate} 
                {self.startDate !== null && self.startDate !== "" && " - "}
                {self.endDate}
            </div>
            <div className="cvEntryBody">{self.description}</div>
        </div>
    )
}