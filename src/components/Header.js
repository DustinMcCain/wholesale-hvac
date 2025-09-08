import React from 'react';
import { Helmet } from "react-helmet";
import { Link, NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles/header.css';

const Header = () => {
  return (
    <div className="Header short-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>RockRuth Heating & Air</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="canonical" href="https://www.rockruth.com/" />
      </Helmet>
          <div className="top-links">
            <div className="email-link">
              <Icon name='envelope' />
              <a href="mailto:customerservice@rockruth.com">customerservice@rockruth.com</a>
            </div>
            <div className="phone-link">
              <Icon name='phone' />
              <span> <a href="tel:+13802101441">(380) 210-1441</a>&nbsp;&nbsp;</span>
              {/* <span style={{ whiteSpace: 'nowrap' }}>
            <Icon name='phone' />GA <a href="tel:+14705814642">(470) 581-4642</a></span> */}
            </div>


          </div>

          <div className="main-nav">
            <Link to="/"><div className="logo">
            </div></Link>
            <div className="nav-list">
              <span className="menu-icon"><i className="fas fa-bars"></i></span>
              <ul>
                <li className="link-home">
                  <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
                </li>
                <li className="link-shop">
                  <NavLink to="/shop" activeClassName="selected">SHOP NOW</NavLink>
                </li>
                <li>
                  <NavLink to="equipment-for-sale" activeClassName="selected">
                    <span className="nobreak">HVAC EQUIPMENT </span>&nbsp;
                <span className="nobreak"> FOR SALE</span>
                  </NavLink>
                </li>
                <li><NavLink to="financing" activeClassName="selected">
                  FINANCING AVAILABLE
            </NavLink></li>
                <li><NavLink to="contact" activeClassName="selected">
                  CONTACT
             </NavLink></li>
              </ul>
            </div>
            <div className="quote-button">
              <Link to="shop">GET A QUOTE</Link>
            </div>
          </div>




          <div className="hearth-financing-logo" style={{
            position: 'absolute',
            right: '20px',
            top: '108px',
            transform: 'scale(0.85)'
          }}>

            <img style={{ outline: 'none', margin: '0 auto', display: 'block' }} 
              alt="Financing by Hearth"
              src={require('./images/financing-by-hearth-logo-150x150.webp')}
              width="100" height="100" />

            {/* <span style={{
              fontSize: '15px',
              fontWeight: '500',
              textAlign: 'center',
              fontStyle: 'italic',
              marginTop: '-18px',
              display: 'block',
              color: '#D9363E',
              background: 'rgba(255,255,255,0.8)'
            }}>
              Serving Florida and Greater Atlanta
             </span> */}
          </div>

    </div >
  )
}

export default Header;
