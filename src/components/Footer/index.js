import React from 'react';
import { Styles } from "./styles";
//import head  from '../.././asset/head.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitter, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Footer = () =>  {
  return (
    <div style={Styles.container}>
    	<div style={Styles.content1}>
    		<p style={{fontFamily: 'Work Sans', fontSize: 20, fontWeight: 'bold'}}>ToyStore</p>
    		<div style={Styles.row}>
	    		<p style={{fontSize: 15}}>Home</p>
	  			<p style={{marginLeft: 20, marginRight: 20, fontSize: 15}}>Catalog</p>
	        <p style={{fontSize: 15}}>Delivery</p>
	        <p style={{marginLeft: 20, marginRight: 20, fontSize: 15}}>About</p>
	        <p style={{fontSize: 15}}>Contacts</p>
        </div>
        <div style={Styles.row}>
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          <FontAwesomeIcon icon={faTwitter} size="1x" style={{marginLeft: 20, marginRight: 20}}/>
          <FontAwesomeIcon icon={faInstagram} size="1x" />
          <FontAwesomeIcon icon={faYoutube} size="1x" style={{marginLeft: 20, marginRight: 20}}/>
          <FontAwesomeIcon icon={faPinterest} size="1x" />
        </div>
    	</div>
    	<hr style={Styles.line}/>
    	<div style={Styles.content2}>
    		<p style={{fontSize: 12}}>Created with love by <span style={{borderBottom: '1px solid #fff'}}> Elastic Themes</span></p>
    		<p style={{fontSize: 12}}>Powered by 
	    		<span style={{borderBottom: '1px solid #fff'}}> Webflow</span>
	    		<span style={{borderBottom: '1px solid #fff', marginRight:10, marginLeft: 10}}>. Style Guide</span>
	    		<span style={{borderBottom: '1px solid #fff'}}>. Licensing</span>
    		</p>
    	</div>
    </div>
  );
}

export default Footer;
