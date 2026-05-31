import ContactLine from "./contact-line"
import CvTitle from "./cv-title"

const contactIcons = {
    email: <img src="src/assets/email.svg"></img>,
    link: <img src="src/assets/link.svg"></img>,
    location: <img src="src/assets/location.svg"></img>,
    phone: <img src="src/assets/phone.svg"></img>,
}

export default function CvSidebar({personalInfo, skillsList}) {
    return (
        <div className="cvSidebar">
            <div className="cvSidebarSect">
                <CvTitle text="Contact"></CvTitle>
                {personalInfo.email && <ContactLine icon={contactIcons.email} text={personalInfo.email}></ContactLine>}
                {personalInfo.phone && <ContactLine icon={contactIcons.phone} text={personalInfo.phone}></ContactLine>}
                {personalInfo.location && <ContactLine icon={contactIcons.location} text={personalInfo.location}></ContactLine>}
                {personalInfo.link && <ContactLine icon={contactIcons.link} text={personalInfo.link}></ContactLine>}
                {(Object.entries(personalInfo).every(info => !info[1] || info[0] === "name")) && <div className="nullInfo">No info added</div>}
            </div>
            <div className="cvSidebarSect">
                <CvTitle text="Skills"></CvTitle>
                <div className="skillsList">
                    {skillsList.map(skill => <div className="cvSkill">{skill}</div>)}
                    {skillsList.length === 0 && <div className="nullInfo">No skills added</div>}
                </div>
            </div>
            <div className="cvSidebarSect">
                <CvTitle text="Certifications"></CvTitle>
                <ul className="certsList">
                    <li>Fake Cert 1</li>
                    <li>Fake Cert Long text text text text text</li>
                </ul>
            </div>
        </div>
    )
}