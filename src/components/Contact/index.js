import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_5af7qid',
                'template_zfh8fi9',
                refForm.current,
                'Lb1bYGaGB_WyQxGUF'
            )
            .then(
                () => {
                    alert('Your message has been sent successfully')
                    window.location.reload(false)
                },
                () => {
                    alert('Your message was unable to send, please try again')
                }
            )
    }


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />

                    </h1>
                    <p>
                        I’m always eager to connect with clients, collaborators, and employers who are ready to create something impactful. Whether you're in need of a skilled developer with a passion for JavaScript, React, and crafting clean, responsive interfaces—or you're just curious to explore opportunities—I’m ready to dive in.

                        Have a project in mind or an idea to discuss? Fill out the form below to send me an email, and let’s start turning your vision into reality!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type='text'
                                        name='subject'
                                        placeholder='Subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        name='message'
                                        placeholder='Message'
                                        required
                                    >
                                    </textarea>
                                </li>
                                <li>
                                    <input
                                        type='submit' className='flat-button'
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>

                    </div>

                </div>
                <div className='info-map'>
                    Kedar-Charlie-3131
                    <br />
                    Astro Apartment 5-11, Starry Way
                    <br />
                    Planetary District, Andromeda Galaxy
                    <br />
                    Lagos
                    <br />
                    P.S. Don't forget to stop by to experience the greatness of a Frontend Developer
                    <br />
                    <span>omodaraomokayode@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[6.5243793, 3.3792057]} zoom={14}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        <Marker position={[6.5243793, 3.3792057]}>
                            <Popup>Kayode probably lives here, I'll get to where ever you are if you have a job for me me so you might not need this map :)
                            </Popup>
                        </Marker>

                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;