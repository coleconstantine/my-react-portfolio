import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div classname="socialMedia">
          <LinkedInIcon />
        </div>
        <p> &copy; 2024 Cole Portfolio Cole.com</p>
    </div>
  )
}

export default Footer