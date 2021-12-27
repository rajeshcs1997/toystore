import React from 'react';
import { Styles } from "./styles";
//import head  from '../.././asset/head.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Navbar = () =>  {
  return (
    <>
      <div style={Styles.contactheader}>
        <div style={Styles.callus}>
          <p>call Us: 123456789</p>
          <p style={{marginLeft: '15px'}}>Email: test@gmail.com</p>
        </div>
        <div style={Styles.iconrow}>
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          <FontAwesomeIcon icon={faTwitter} size="1x" style={{marginLeft: 20, marginRight: 20}}/>
          <FontAwesomeIcon icon={faInstagram} size="1x" />
          <FontAwesomeIcon icon={faYoutube} size="1x" style={{marginLeft: 20, marginRight: 20}}/>
          <FontAwesomeIcon icon={faPinterest} size="1x" />
        </div>
      </div>
      <div style={Styles.navheader}>
        <div style={Styles.rowitem}>
          <p style={{fontFamily: 'Work Sans', fontSize: 25, fontWeight: 'bold'}}>ToyStore</p>
          <p style={{marginLeft: 50, marginRight: 50}}>Catalog</p>
          <p>Delivery</p>
          <p style={{marginLeft: 50, marginRight: 50}}>About</p>
          <p>Contacts</p>
        </div>
        <div style={Styles.rowitem}>
          <p>cart</p>
          <FontAwesomeIcon icon={faCartPlus} size="1x" style={{marginLeft: 20}} />
          <p style={Styles.cartnumber}>0</p>  
        </div>
      </div>
    </>
  );
}

export default Navbar;
