import ContactLine from "./contact-line"
import CvTitle from "./cv-title"

import emailSvg from "../assets/email.svg";
import linkSvg from "../assets/link.svg";
import locationSvg from "../assets/location.svg";
import phoneSvg from "../assets/phone.svg";
const contactIcons = {
    email: <img src={emailSvg}></img>,
    link: <img src={linkSvg}></img>,
    location: <img src={locationSvg}></img>,
    phone: <img src={phoneSvg}></img>,
}

export default function CvSidebar({personalInfo, skillsList, certsList}) {
    return (
        <div className="cvSidebar">
            <div className="cvSidebarSect">
                <CvTitle text="Contact"></CvTitle>
                {personalInfo.email && <ContactLine icon={contactIcons.email} text={personalInfo.email}></ContactLine>}
                {personalInfo.phone && <ContactLine icon={contactIcons.phone} text={personalInfo.phone}></ContactLine>}
                {personalInfo.location && <ContactLine icon={contactIcons.location} text={personalInfo.location}></ContactLine>}
                {personalInfo.link && <ContactLine icon={contactIcons.link} text={personalInfo.link} isLink={true}></ContactLine>}
                {(Object.entries(personalInfo).every(info => !info[1] || info[0] === "name")) && <div className="nullInfo">No info added</div>}
            </div>
            <div className="cvSidebarSect">
                <CvTitle text="Skills"></CvTitle>
                <div className="skillsList">
                    {skillsList.map(skill => <div className="cvSkill" key={skill.id}>{skill.text}</div>)}
                    {skillsList.length === 0 && <div className="nullInfo">No skills added</div>}
                </div>
            </div>
            {certsList.length > 0 && 
             <div className="cvSidebarSect">
                <CvTitle text="Certifications"></CvTitle>
                <ul className="certsList">
                    {certsList.map(cert => <ul key={cert.id}>{cert.text}</ul>)}
                </ul>
            </div>           
            }
        </div>
    )
}