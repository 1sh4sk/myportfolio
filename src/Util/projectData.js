import KeeperApp from '../Images/Projects/keeper-app.png'
import Jobify from '../Images/Projects/jobify.png'
import ECommerce from '../Images/Projects/e-commerce.png'
import ToDoList from '../Images/Projects/to-do-list.png'
import Brainwave from '../Images/Projects/brainwave.png'
import Nike from '../Images/Projects/nike-home.png'
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";



const projectData = [
    {
        id: 5,
        projectImg: Brainwave,
        name: "Brainwave",
        codeLink: "https://github.com/1sh4sk/brainwave",
        codeIcon: <FaGithub className="code-icon" />,
        projectLink: "https://brainwave-1sh4sk.netlify.app/"
    },
    {
        id: 6,
        projectImg: Nike,
        name: "Nike App",
        codeLink: "https://github.com/1sh4sk/nike-home",
        codeIcon: <FaGithub className="code-icon" />,
        projectLink: "https://nike-home-1sh4sk.netlify.app/"
    },
    {
        id: 1,
        projectImg: Jobify,
        name: "Jobify Project (MERN)",
        codeLink: "https://github.com/1sh4sk/Jobify",
        codeIcon: <FaGithub className="code-icon" />,
        projectLink: "https://jobify-3wle.onrender.com/"
    },
    {
        id: 2,
        projectImg: ECommerce,
        name: "Ecommerce Project (MERN)",
        codeLink: "ECommercehttps://github.com/1sh4sk/e-commerce-stylevent.in",
        codeIcon: <FaGithub className="code-icon" />,
        projectLink: "#"
    },
    {
        id: 3,
        projectImg: KeeperApp,
        name: "Keeper App Project (UI)",
        codeLink: "https://codesandbox.io/s/keeper-app-g873h9",
        codeIcon: <AiFillCodeSandboxCircle className="code-icon" />,
        projectLink: "https://g873h9.csb.app/"
    },
    {
        id: 4,
        projectImg: ToDoList,
        name: "ToDoList Project (UI)",
        codeLink: "https://codesandbox.io/s/to-do-list-whvj2n",
        codeIcon: <AiFillCodeSandboxCircle className="code-icon" />,
        projectLink: "https://whvj2n.csb.app/"
    },

];

export default projectData;