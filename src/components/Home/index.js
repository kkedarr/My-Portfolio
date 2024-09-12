import React, { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-k-dark.svg'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons/faGitAlt';
import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'y', 'o', 'd', 'e']
    const jobArray1 = ['A', ' ', 'F', 'r', 'o', 'n', 't', 'e', 'n', 'd']
    const jobArray2 = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={`${letterClass} _11`}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}> </span>
                        <span className={`${letterClass} _14`}>t</span>
                        <span className={`${letterClass} _15`}>h</span>
                        <span className={`${letterClass} _16`}>e</span>
                        <span className={`${letterClass} _17`}>r</span>
                        <span className={`${letterClass} _18`}>e</span>
                        <br />
                        <span className={`${letterClass} _19`}>I</span>
                        <span className={`${letterClass} _20`}>'</span>
                        <span className={`${letterClass} _21`}>m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray1}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray2}
                            idx={15}
                        />
                    </h1>
                    <h2>... and Writer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color='#FFD43B' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06539' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>

                    </div>

                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home;