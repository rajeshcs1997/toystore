import React, {useState} from 'react';
import { Styles } from "./styles";
import child  from '../.././assets/child.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const Subscribe = () =>  {

	const [hover, setHover] = useState(false)

  return (
    <div style={Styles.card}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div style={{width: 50, height: 50, borderRadius: '50%', backgroundColor: '#a1e312', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FontAwesomeIcon icon={faPaperPlane} size="1.5x" color="#fff"/>
        </div>
        <div style={{marginLeft: 10}}>
          <p style={{marginBottom: '0px'}}>Subscribe to our newsletter</p>
          <p>& get <span style={{color: '#a1e312'}}>10% discount!</span></p>
        </div>
      </div>

      <div>
        <input type="text" style={Styles.textfield} name="firstname" placeholder="Enter your email address" />
        <button onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} style={ hover ? Styles.buttonhover: Styles.button }>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
