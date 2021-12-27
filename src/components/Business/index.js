import React, {useState} from 'react';
import { Styles } from "./styles";
import child  from '../.././assets/child.jpeg'

const Business = () =>  {

	const [hover, setHover] = useState(false)

  return (
  	<div>
	    <div style={Styles.headercontainer}>
	    	<p style={{color: '#a1e312'}}>Made for webflow</p>
	    	<p style={{fontSize: 25, fontFamily: 'Work Sans sans-serif', marginTop: 0, marginBottom: 0}}>Simple & colorfull Ecommerce</p>
	      <p style={{fontSize: 25, fontFamily: 'Work Sans sans-serif', marginTop: '4px'}}>Template for Your Business</p>
	    </div>

	    <div style={Styles.leftcontent}>
		    <div style={{width: '45%'}}>
		    	<p style={{fontSize: 25, fontFamily: 'Work Sans sans-serif'}}>Available for Free</p>
		    	<p style={{color: '#808080', fontSize: '13px'}}>Marketing is the most exciting of all business sports. It is the heartbeat of every successful business. It is continually changing in response to the explosion of information, the expansion of technology, and the aggressiveness of competition, at all levels and everywhere.</p>
		    	<button onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} style={ hover ? Styles.buttonhover: Styles.button }>GET IT NOW</button>
		    </div>
		    <img src={child} alt="Girl in a jacket" style={{width: '45%', borderRadius: '20px'}}/>
	    </div>
	  </div>
  );
}

export default Business;
