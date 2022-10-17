import React from "react";
import "../styles/Logo.css"
import freeCodeCampLogo from '../assets/freecodecamp-logo.png';


const Logo = () => {
    return (
        <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
    )
};

export default Logo