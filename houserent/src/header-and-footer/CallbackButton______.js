import * as React from 'react';
// import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import "../products/products.css";

export default function CallbackButton ({data, handleToggle, classname, iconUrl, iconClass, textClass}) {
  return (
      <div className='Callback-button-container Pulse-Icon'>
        <button className={classname} onClick={handleToggle}>
        <img alt="Icon" className={`Header-Callback-Icon ${iconClass}`} src={require(`../img/${iconUrl}`)}>
        </img>
          {/* <PhoneCallbackIcon className='Header-icon' /> */}
          {/* <img alt="Icon" src={require(`../img/${iconUrl}`)}></img> */}
        <span className={`${textClass}`}>{data.header.callback.text}</span></button>
      </div>
  );
}
