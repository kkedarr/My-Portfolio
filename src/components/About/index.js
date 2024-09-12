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
                        Hi there! I’m Omokayode Charles, a  Frontend Developer with in-depth knowledge of JavaScript, ReactJS, and basic Python as that is what I started my coding journey with. Now, I specialize in creating dynamic, responsive websites with a focus on performance and user experience. My skill set spans across modern web technologies, allowing me to bring innovative solutions to life, whether through interactive UI components or logic.
                    </p>
                    <p>
                        With a strong problem-solving  mindset and clean code practices, I continuously push the boundaries of what’s possible in web development. I thrive in collaborative environments and enjoy taking on challenges that require creative, efficient solutions.
                    </p>
                    <p>
                        Curious about the rest of my tech stack? Head over to the Stack section for a detailed list of the tools and frameworks I’m familiar with!
                    </p>


                </div>


            </div>
            <Loader type="pacman" />
        </>
    )
}


export default About;