import CvTitle from "./cv-title";
import CvExperience from "./cv-experience";
import CvProject from "./cv-projects";

export default function CvMain({experienceList, projectList}) {
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
                {projectList.map(proj => 
                    <CvProject key={proj.id} self={proj}></CvProject>
                )}
            </div>
            <div className="cvMainSect">
                <CvTitle text="Education"></CvTitle>
            </div>
        </div>
    )
}