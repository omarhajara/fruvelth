import React from 'react';
import Close from '../../Assets/close.png';
import './menu.scss';





const Menu = ({ handleClose, show }) => {
    const showHideClassName = show ? "menu display-block" : "menu display-none";

    return (
        <div className={showHideClassName}>
             <div className="menu-container" className="w3-animate-top" tabindex="-1" aria-labelledby="menu" aria-hidden="true">
                    <div className="close">
                        <img src={Close}  onClick={handleClose}/>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
            </div>
        </div>
    );
};





export default Menu;