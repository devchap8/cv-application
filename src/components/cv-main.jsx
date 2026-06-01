import CvTitle from "./cv-title";
import CvExperience from "./cv-experience";

export default function CvMain({experienceList}) {
    return (
        <div className="cvMain">
            <div className="cvMainSect">
                <CvTitle text="Experience"></CvTitle>
                {experienceList.map(exp => 
                    <CvExperience key={exp.id} self={exp}></CvExperience>
                )}
            </div>
            <div className="cvMainSect">
                <CvTitle text="Projects"></CvTitle>
            </div>
            <div className="cvMainSect">
                <CvTitle text="Education"></CvTitle>
            </div>
        </div>
    )
}