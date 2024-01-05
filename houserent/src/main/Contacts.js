import { useRef, useLayoutEffect, useState } from 'react';

import React from 'react';
// import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Leaflet from 'leaflet';

const Contacts = ({data}) => {


    const [currentFirstInputClassname, setCurrentFirstInputClassname] = useState("");
    const [currentSecondInputClassname, setCurrentSecondInputClassname] = useState("");
    const [currentThirdInputClassname, setCurrentThirdInputClassname] = useState("")


    return (
        <div id="contacts" className='Contacts-Container'>
           <div className='Contacts-Information-Container'>
                <p>Contacts info</p>
            </div>
            <div className='Contacts-Form-Container'>
                <p>Contact us</p>
                    <form className='Contacts-Form'>
                        <img className='Contacts-Form-House-Icon' src={require("../data/icons/house_contacts_icon.png")} alt="House icon"></img>
                        <img className={`Contacts-Form-Window-Icon First-Window-Icon ${currentFirstInputClassname}`}
                        src={require("../data/icons/house_contacts_window_icon.png")} alt="House window icon"></img>
                        <img className={`Contacts-Form-Window-Icon Second-Window-Icon ${currentSecondInputClassname}`} 
                        src={require("../data/icons/house_contacts_window_icon.png")} alt="House window icon"></img>
                        <img className={`Contacts-Form-Window-Icon Third-Window-Icon ${currentThirdInputClassname}`} 
                        src={require("../data/icons/house_contacts_window_icon.png")} 
                        alt="House window icon"></img>
                        <textarea className="Contacts-Form-Input First-Form-Input"
                        placeholder={data.contacts.feedback.nameInputText} 
                        onClickCapture={() => {setCurrentFirstInputClassname("Activated-Input");setCurrentSecondInputClassname("");
                        setCurrentThirdInputClassname("")}}></textarea>
                        <textarea className="Contacts-Form-Input Second-Form-Input"
                        placeholder={data.contacts.feedback.contactsInputText}
                        onClickCapture={() => {setCurrentFirstInputClassname(""); setCurrentSecondInputClassname("Activated-Input"); 
                        setCurrentThirdInputClassname("")}}></textarea>
                        <textarea className="Contacts-Form-Input Third-Form-Input"
                        placeholder={data.contacts.feedback.messageInputText}
                        onClickCapture={() => {setCurrentFirstInputClassname(""); setCurrentSecondInputClassname(""); 
                        setCurrentThirdInputClassname("Activated-Input")}}></textarea>
                    </form>
                <button>Send message</button>
            </div>
            <div className='Contacts-Map-Container'>
                Google map
            </div> 
        </div>
    )
}

export default Contacts;