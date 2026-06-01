export default function CvProject({self}) {
    return (
        <div className="cvMainEntry">
            <h3 className="cvEntryTitle">
                <p className="cvEntryTitleMain">{self.name}</p> 
            </h3>
            <a className="cvProjectLink" href={self.link}>{self.link}</a>
            <div className="cvEntryBody">{self.description}</div>
        </div>
    )
}