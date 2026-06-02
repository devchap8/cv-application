import CvTitle from "./cv-title";
import CvExperience from "./cv-experience";
import CvProject from "./cv-projects";
import CvEducation from "./cv-education";

const checkEmptyList = (list) => {
    return list.every(obj => Object.entries(obj).every(([key, val]) => !val || key === "id"));
}

export default function CvMain({experienceList, projectList, educationList}) {
    return (
        <div className="cvMain">
            <div className="cvMainSect">
                <CvTitle text="Experience"></CvTitle>
                {checkEmptyList(experienceList) && <div className="nullInfo">No experience listed</div>}
                {experienceList.map(exp => 
                    <CvExperience key={exp.id} self={exp}></CvExperience>
                )}
            </div>
            <div className="cvMainSect">
                <CvTitle text="Projects"></CvTitle>
                {checkEmptyList(projectList) && <div className="nullInfo">No projects listed</div>}
                {projectList.map(proj => 
                    <CvProject key={proj.id} self={proj}></CvProject>
                )}
            </div>
            <div className="cvMainSect">
                <CvTitle text="Education"></CvTitle>
                {checkEmptyList(educationList) && <div className="nullInfo">No education listed</div>}
                {educationList.map(edu => 
                    <CvEducation key={edu.id} self={edu}></CvEducation>
                )}
            </div>
        </div>
    )
}