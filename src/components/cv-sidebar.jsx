import ContactLine from "./contact-line"
import CvTitle from "./cv-title"

const contactIcons = {
    email: <img src="src/assets/email.svg"></img>,
    link: <img src="src/assets/link.svg"></img>,
    location: <img src="src/assets/location.svg"></img>,
    phone: <img src="src/assets/phone.svg"></img>,
}

export default function CvSidebar() {
    return (
        <div className="cvSidebar">
            <div className="cvSidebarSect">
                <CvTitle text="Contact"></CvTitle>
                <ContactLine icon={contactIcons.email} text={"email@email.com"}></ContactLine>
                <ContactLine icon={contactIcons.phone} text={"(555) 123-4567"}></ContactLine>
                <ContactLine icon={contactIcons.location} text={"City, Country"}></ContactLine>
                <ContactLine icon={contactIcons.link} text={"google.com"} isLink={true}></ContactLine>
            </div>
            <div className="cvSidebarSect">
                <CvTitle text="Skills"></CvTitle>
            </div>
            <div className="cvSidebarSect">
                <CvTitle text="Certifications"></CvTitle>
            </div>
        </div>
    )
}