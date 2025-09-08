import React, { useCallback, useEffect } from 'react';

import Map from './Map';

import './styles/shop.css';
import './styles/info-page.css';
import { Icon } from 'semantic-ui-react';
import calendarImg from './images/calendar.png';

const Contact = props => {
  const setScrollRef = useCallback(node => {
    if (node !== null) {
      node.parentNode.parentNode.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [])


  useEffect(
    () => props.changeRoute('contact')
  )

  return <div className="Contact" ref={setScrollRef}>

    <div className="info-page">
      <h1 className="title">CONTACT US</h1>
      <div className="deck">
        <p><strong>24 Hour Emergency Service Available</strong></p>
        <p>
          We strive to be in constant communication with our customers until the job is done. If you have questions or special requests, just drop us a line. To get a free quote, or for emergency service, please contact us at your convenience or book online for your heating & air needs. We look forward to serving you!</p>
      </div>
      <div className="info-blurb">
        <p><strong>RockRuth Heating &amp; Air</strong></p>
        <div style={{ marginLeft: '1rem' }}>
          <p> <Icon name='phone' /> 
            <span> FL Office <a href="tel:+13802101441">(380) 210-1441</a>&nbsp;&nbsp;</span> <span style={{ whiteSpace: 'nowrap' }}>
              <br /><Icon name='phone' /> GA Office <a href="tel:+14705814642">(470) 581-4642</a></span></p>
          <p> <Icon name='phone' /> After Hours: <a href="tel:+14705814642">(470) 581-4642</a></p>
          <p> 
            <Icon name='mail outline' /><a style={{fontSize:'.85em'}} href="mailto:customerservice@rockruth.com">customerservice@rockruth.com</a>
          </p>
        </div>

        <p><a href="https://portal.fieldpulse.com/rockruthhvac"
          target="_blank" rel="noreferrer noopener">
          <img src={calendarImg} style={{
            maxWidth: '20rem',
            margin: '1rem auto -3rem 0'
          }} alt="calendar" /><br /><strong style={{
            color: 'var(--hi-blue)',
            display: 'inline-block',
            margin: '3rem 3rem 3rem 8px',
            fontSize: '1.8rem',
            textAlign: 'center'
          }}>
            • Schedule Service Now!</strong>
        </a>
        </p>
      </div>
      <div className="info-blurb">

        <Map text="RockRuth Heating &amp; Air" latitude={25.8000316} longitude={-80.2017535} zoom={15} height='500px' width='45vw' />
      </div>

    </div>
  </div>
}

export default Contact;
