import { useRef, useLayoutEffect, useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import React from 'react';
// import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import Leaflet from 'leaflet';

const Contacts = ({data}) => {


    const fullPhoneNumber = "tel:" + data.contacts.phoneNumber;
    const secondFullPhoneNumber = "tel:" + data.contacts.secondPhoneNumber;
    const fullEmail = "mailto:" + data.contacts.email;

    const [currentFirstInputClassname, setCurrentFirstInputClassname] = useState("");
    const [currentSecondInputClassname, setCurrentSecondInputClassname] = useState("");
    const [currentThirdInputClassname, setCurrentThirdInputClassname] = useState("")

    // phoneNumber: "+380503426079",
    //         secondPhoneNumber: "+380978720744",
    //         address: "Украина, г. Днепр, ул. Гоголя, д. 15, 2 этаж, оф. 25",
    //         email: "Tkirillova75@gmail.com",

    return (
        <div id="contacts" className='Contacts-Container'>
            <div className='Contacts-Extra-Container'>
                <div className='Contacts-Information-Container'>
                    <a className="Contacts-item Contacts-link" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><PhoneIcon className="Contacts-link-Icon"/>{data.contacts.phoneNumber}</span>
                    </a>
                    <a className="Contacts-item Contacts-link" href={secondFullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><PhoneIcon className="Contacts-link-Icon"/>{data.contacts.secondPhoneNumber}</span>
                    </a>
                    <a className="Contacts-item Contacts-link" href={fullEmail} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><EmailIcon className="Contacts-link-Icon"/>{data.contacts.email}</span>
                    </a>
                    <p className="Contacts-item" >
                        <span className="Contacts-link-text"><RoomIcon className="Contacts-link-Icon"/>{data.contacts.address}</span>
                    </p>
                </div>
                <div className='Contacts-Map-Container'>
                    Google map
                </div> 
            </div>
            <div className='Contacts-Form-Container'>
                    <p className='Contacts-Form-Title'>{data.contacts.feedback.heading}</p>
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
                <button className='Contacts-Form-Button'>{data.contacts.feedback.buttonText}</button>
            </div>
        </div>
    )
}

export default Contacts;