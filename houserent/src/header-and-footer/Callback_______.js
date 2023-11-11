import * as React from 'react';
import { useState } from 'react';
// import { useRef } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../products/products.css";
import CallbackButton from './CallbackButton';
// import emailjs from '@emailjs/browser';

export default function Callback ({data, open, handleClose, handleToggle, classname, iconUrl, textClass}) {

    const [nameValue, setNameValue] = useState("");

    const [phoneNumberValue, setPhoneNumberValue] = useState("");

    const textOnlyForbiddenSymbols = "1234567890~@#$%^&*{}:?><.,/*+-№=;";

    const phoneNumberSymbols = "1234567890+()";


    const textOnlyValidation = (inputValue, symbols) => {
        if (symbols.includes(inputValue[inputValue.length - 1])) {
            setNameValue(inputValue.slice(0, -1))
        } else {
            setNameValue(inputValue)
            }
    }

    const phoneNumberValidation = (inputValue, symbols) => {
        if (!symbols.includes(inputValue[inputValue.length - 1])) {
            setPhoneNumberValue(inputValue.slice(0, -1))
        } else {
            setPhoneNumberValue(inputValue)
            }
    }

    // const resetCallbackForm = () => {
    //   setNameValue("");
    //   setPhoneNumberValue("");
    // }

    // const form = useRef();

  //   const sendCallbackEmail = (e) => {
  //     e.preventDefault();
  //     if (nameValue !== "" && phoneNumberValue !== "") {
  //         emailjs.sendForm('service_j50xckc', 'template_kxioadp', form.current, 'eXu1yPCc0paCDwe5f')
  //         .then((result) => {
  //           console.log(result.text);
  //           handleClose();
  //         }, (error) => {
  //             console.log(error.text);
  //             handleClose();
  //         });
  //         resetCallbackForm();
  //     }
  // };

  // const handleCallbackSubmit = () => {
  //   sendCallbackEmail(); 
  //   handleClose()
  // }

  return (
    <div>
      <CallbackButton data={data} handleToggle={handleToggle} classname={classname} iconUrl={iconUrl} textClass={textClass} />
      <Backdrop
        sx={{ color: '#fff', zIndex: "100" }}
        open={open} 
      >
       <div className='Callback-container'>
        <div className='Callback-inner-button-container'>
          <button className='Callback-inner-button' onClick={handleClose}><CloseIcon /></button>
        </div>
        <p className='Callback-heading'>{data.header.callback.header}</p>
        <p className='Callback-text'>{data.header.callback.message}</p>
        {/* <form className='Callback-textfield-container' ref={form}>
          <input style={{backgroundColor: "white"}} name="user_name" className='Callback-textfield' onChange={event => {textOnlyValidation(event.target.value, textOnlyForbiddenSymbols)}} value={nameValue} placeholder={data.header.callback.nameText}></input>
          <input style={{backgroundColor: "white"}} name="user_phone_number" className='Callback-textfield' onChange={event => {phoneNumberValidation(event.target.value, phoneNumberSymbols)}} value={phoneNumberValue} placeholder={data.header.callback.phoneText}></input>
        </form>
        <button className='Callback-inner-button Callback-submit-button'  onClick={sendCallbackEmail}><span>{data.header.callback.buttonText}</span>
        <ArrowForwardIosIcon className='Callback-inner-button-icon' /> </button> */}
        <form className='Callback-textfield-container' 
        id="contactform" action="https://formsubmit.io/send/eac64596-98d2-4f48-a08d-515ae0ce4dbb" method="POST">
          <input name="_redirect" type="hidden" id="name" value="https://ferrometals-demo.netlify.app"></input>
          <input style={{backgroundColor: "white"}} name="user_name" type="text" id="user_name" className='Callback-textfield' 
          onChange={event => {textOnlyValidation(event.target.value, textOnlyForbiddenSymbols)}} value={nameValue} 
          placeholder={data.header.callback.nameText}></input>
          <input style={{backgroundColor: "white"}} name="user_phone_number" type="text" id="user_phone_number" 
          className='Callback-textfield' onChange={event => {phoneNumberValidation(event.target.value, phoneNumberSymbols)}} 
          value={phoneNumberValue} placeholder={data.header.callback.phoneText}></input>
          <input name="_formsubmit_id" type="text" style={{display: "none"}}></input>
          <button className='Callback-inner-button Callback-submit-button' value="Submit" type="submit">
            <span>{data.header.callback.buttonText}</span><ArrowForwardIosIcon className='Callback-inner-button-icon' /> 
          </button>
        </form>
        <p className='Callback-text'>{data.header.callback.dataMessage}</p>
       </div>
      </Backdrop>
    </div>
  );
}