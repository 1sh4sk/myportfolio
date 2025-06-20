import './ProjectCard.css'
import projectData from "../../Util/projectData";
import { FiExternalLink } from "react-icons/fi";


const ProjectCard = () => {
    return (
        <>{projectData.map((data, index) => {
            return (
                <div className="card" key={data.id}>
                    <div className="card_imgbg">
                        <img className="card_img" src={data.projectImg} alt="" />

                    </div>
                    <div className="card_body">
                        <h3>{data.name}</h3>
                        <div>
                            <a href={data.codeLink} target="_blank" rel="noreferrer">
                                {data.codeIcon}
                            </a>

                            <button>
                                <a href={data.projectLink} target="_blank" rel="noreferrer" className="btn-link">
                                    Visit <FiExternalLink className="link-icon" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })}

        </>
    )
}
export default ProjectCard;