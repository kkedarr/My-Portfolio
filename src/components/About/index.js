import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hi there! I’m Omokayode Charles Omodara, a Frontend Developer with expertise in JavaScript, ReactJS, and basic Python, which marked the beginning of my coding journey. I hold a degree in Industrial Mathematics, which sharpened my analytical and problem-solving skills, enabling me to tackle web development challenges with precision and logic.
                    </p>
                    <p>
                        I specialize in building dynamic, responsive websites with a keen focus on performance and user experience. Whether it's crafting interactive UI components or writing optimized, clean code, I strive to deliver innovative solutions using modern web technologies.
                    </p>
                    <p>
                        I thrive in collaborative environments, always seeking creative and efficient ways to solve complex problems. From my experience analyzing supply chain logistics at Fan Milk PLC to completing numerous frontend development projects, I continuously push the boundaries of what's possible in web development.
                    </p>
                    <p>Curious about the work I’ve done? Head over to the Projects section to explore some of my recent work!</p>


                </div>


            </div>
            <Loader type="pacman" />
        </>
    )
}


export default About;