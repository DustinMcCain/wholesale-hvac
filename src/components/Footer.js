import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './styles/footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-links" style={{ height: 'auto', position: 'relative' }} >
        <div className="email-link">
          <Icon name='envelope' />
          <a href="mailto:customerservice@rockruth.com">customerservice@rockruth.com</a>
        </div>
        <div className="phone-link">
          <Icon name='phone' />
          <span> <a href="tel:+13802101441">(380) 210-1441</a>&nbsp;&nbsp;</span>
          {/* <span style={{ whiteSpace: 'nowrap' }}> <Icon name='phone' />GA <a href="tel:+14705814642">(470) 581-4642</a></span> */}
        </div>

        <div className="copyright">&copy; {new Date().getFullYear()} <br />RockRuth Heating &amp; Air<br />HVAC Online Pricing Matrix LLC</div>
        <div className="quote-button">
          <Link to="shop">SHOP NOW</Link>
        </div>
      </div>
    </div >
  )
}

export default Footer;
