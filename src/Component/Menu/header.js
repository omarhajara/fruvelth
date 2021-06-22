import React, { Component } from 'react'
import Menu from './menu';
import './menu.scss'
import MenuIcon from '../../Assets/harmburger.png';
// import Search from '../../Assets/search.png'


class Header extends Component {
    state = { show: false };

    showMenu = () => {
      this.setState({ show: true });
    };
  
    hideMenu = () => {
      this.setState({ show: false });
    };


    render() {
        return (
           <div className='header'>
                <Menu show={this.state.show} handleClose={this.hideMenu}/>
                <div className='header-container'>
                    <div className='menu-icon'>
                        <img src={MenuIcon} onClick={this.showMenu}/>
                    </div>
                    <div className='menu-text'>
                        <h2>s<span>H</span>ospital</h2>
                    </div>
                    <div className='ntn'>
                        {/* <img src={Search}/> */}
                       
                    </div>
                    <div className='menu-links'>
                        {/* <img src={Search}/> */}
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>My Dashboard</li>
                        </ul>
                    </div>
                </div>
           </div>
        )
    }
}


export default Header