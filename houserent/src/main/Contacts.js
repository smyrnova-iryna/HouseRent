import { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
            {/* <div className='Contacts-Extra-Container'> */}
                <div className='Contacts-Information-Container'>
                    <a className="Contacts-item Contacts-link" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><PhoneIcon className="Contacts-link-Icon"/>{data.contacts.phoneNumber}</span>
                    </a>
                    <span className="Contacts-item Contacts-link-text">(Viber, Telegram, WhatsApp)</span>
                    <a className="Contacts-item Contacts-link" href={secondFullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><PhoneIcon className="Contacts-link-Icon"/>{data.contacts.secondPhoneNumber}</span>
                    </a>
                    {/* <a className="Contacts-item Contacts-link" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><TelegramIcon className="Contacts-link-Icon"/>{data.contacts.phoneNumber}</span>
                    </a>
                    <a className="Contacts-item Contacts-link" href={fullPhoneNumber} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><WhatsAppIcon className="Contacts-link-Icon"/>{data.contacts.phoneNumber}</span>
                    </a> */}
                    <a className="Contacts-item Contacts-link" href={fullEmail} target="_blank" rel="noopener noreferrer">
                        <span className="Contacts-link-text"><EmailIcon className="Contacts-link-Icon"/>{data.contacts.email}</span>
                    </a>
                    <p className="Contacts-item Contacts-link-text-address" >
                        <span className="Contacts-link-text"><RoomIcon className="Contacts-link-Icon"/>{data.contacts.address}</span>
                    </p>
                </div>
                {/* <div className='Contacts-Map-Container'> */}


                {/* <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.963426233021!2d35.05012627628134!3d48.45723127128056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2d9a46d6ee3%3A0x6772b458db38ac5a!2z0LLRg9C70LjRhtGPINCT0L7Qs9C-0LvRjywgMTUsINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1707670385063!5m2!1suk!2sua" 
                width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}

                <iframe className='Contacts-Map' title='Map' src={data.contacts.mapUrl} width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    {/* Google map */}
                {/* </div>  */}
            {/* </div> */}
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