import './ProjectCard.css'
import projectData from "../../Util/projectData";
import { FiExternalLink } from "react-icons/fi";


const ProjectCard = () => {
    return (
        <div className="card">
            <div className="card_imgbg">
                <img className="card_img" src={projectData[0].projectImg} alt="" />

            </div>
            <div className="card_body">
                <h3>{projectData[0].name}</h3>
                <div>
                    <a href={projectData[0].codeLink} target="_blank" rel="noreferrer">
                        {projectData[0].codeIcon}
                    </a>

                    <button>
                        <a href={projectData[0].projectLink} target="_blank" rel="noreferrer" className="btn-link">
                            Visit <FiExternalLink className="link-icon" />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;