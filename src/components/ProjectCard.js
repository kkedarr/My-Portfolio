import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



const ProjectCard = ({ title, description, imgUrl }) => {


    return (
        <div className="card-container">
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} style={{ width: '100%' }} />
            </div>
            <div className="project-details">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
            <div className="project-tool-stack">
                <img src={faJsSquare} alt={title} style={{ width: '100%' }} />
            </div>
            <div className='details-button'>
                <Link to="details" className="flat-button">DETAILS</Link>
            </div>
            <div className='button-container'>
                <Link to="/sourcecode" className="flat-button">SOURCE CODE</Link>
                <Link to="/demo" className="flat-button">DEMO</Link>
            </div>
        </div>
    );
};


export default ProjectCard;