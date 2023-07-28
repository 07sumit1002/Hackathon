import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faMap, faLocation, faGraduationCap, faTicket, faLanguage, faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';
// faCreditCard, faPaypal, faBitcoin, faApplePay
const SideNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>
      <div className={`sidenavbar ${isDrawerOpen ? 'open' : ''}`}><br /><br />
        <ul className="tabs">
          <li>
            <Link className='Sidenav' to="/Rewards">&nbsp;
              <FontAwesomeIcon icon={faAward} />&nbsp;
              Rewards
            </Link>
          </li>
          <li>
            <Link className='Sidenav' to="/Maps">&nbsp;
              <FontAwesomeIcon icon={faMap} />&nbsp;
              Maps
            </Link>
          </li>
          <li>
            <Link className='Sidenav' to="/Cultural Education">&nbsp;
              <FontAwesomeIcon icon={faGraduationCap} />&nbsp;
              Cultural Education
            </Link>
          </li>
          <li>
            <Link className='Sidenav' to="/Translator">&nbsp;
              <FontAwesomeIcon icon={faLanguage} />&nbsp;
              Translator
            </Link>
          </li>
          <li>
            <Link className='Sidenav' to="/Destination">&nbsp;
              <FontAwesomeIcon icon={faLocation} />&nbsp;
              Destination
            </Link>
          </li>
          <li>
            <Link className='Sidenav' to="/Schedule">&nbsp;
              <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;
              Schedule
            </Link>
          </li>
          <li>
            <Link className='Sidenav' to="/Reviews">&nbsp;
              <FontAwesomeIcon icon={faStar} />&nbsp;
              Reviews
            </Link>
          </li>
          <li>
            <a className='Sidenav' href="https://rzp.io/l/rwF1FMmL">&nbsp;
              <FontAwesomeIcon icon={ faTicket } />&nbsp;
              Security Deposit
            </a>
          </li>
          <li className='Sidenav-Sos'>
          <a href="tel:100">&nbsp;
              S O S
            </a>
          </li>
        </ul>
        <div className="toggle-button" onClick={toggleDrawer}>
          <div className={`bar ${isDrawerOpen ? 'open' : ''}`} />
          <div className={`bar ${isDrawerOpen ? 'open' : ''}`} />
          <div className={`bar ${isDrawerOpen ? 'open' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
