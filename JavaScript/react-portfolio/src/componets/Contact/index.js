import "./index.scss"
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const  refForm  = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'gmail',
            'template_00jw9ra',
            refForm.current,
            'Q9EG4WoKsUnDxrGUI'
        ).then(()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },()=>{
                alert('Failed to send message')
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interesed in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using bellow form either.
                    </p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required>
                                        </textarea>
                                </li>
                                <li >
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Lucas Lima,
                    <br/>
                    Brazil, 
                    <br/>
                    Brasilia, DF. 
                    <br/>
                    <span>lucas.lima.23@cjr.org.br</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[-15.76507, -47.869921]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-15.76507, -47.869921]}>
                            <Popup>Lucas studies here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact;