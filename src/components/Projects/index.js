import './index.scss'
import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders';
import ProjectCard from '../ProjectCard'
import AnimatedLetters from '../AnimatedLetters';


const Projects = () => {
    const [activeTab, setActiveTab] = useState("first");

    const projects = [
        {
            title: "XCanon Gaming Platform",
            description: "Gaming & Community",
            imgUrl: '../../assets/images/logo-k-dark.svg',
        },
        {
            title: "CryptoGlance App",
            description: "Cryptocurrency & Updates",
            imgUrl: '../../assets/images/logo-k-dark.svg',
        },
        {
            title: "Portfolio Test",
            description: "Blank",
            imgUrl: '../../assets/images/logo-k-dark.svg',
        },
    ]

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='project-section' id='projects'>
                <div className='container'>
                    <h1 className='-projects-header'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', ' s']}
                            idx={15}
                        />
                    </h1>
                    <div >
                        {
                            projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            ))
                        }
                    </div>

                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects;