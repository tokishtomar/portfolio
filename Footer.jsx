import React from 'react';

const Footer = () => {
    var currYear = new Date().getFullYear();
    return (
        <div className="footer">
            <h3>Copyright © {currYear} <span>Ami.Ke</span> All Rights Reserved by ThemeBing.</h3>
        </div>
    )
}

export default Footer;
