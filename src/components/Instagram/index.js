import React, { useState } from 'react';
import { Styles } from "./styles";
import child  from '../.././assets/child.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import taddy  from '../.././assets/taddy7.jpg'

const Instagram = () =>  {

  const [hover, setHover] = useState(false)

  return (
    <div style={Styles.container}>
      <div style={Styles.content}>
        <p style={{color: '#a1e312', fontSize: '13px'}}>ElasticThemes</p>
        <p style={{marginTop: '0px', fontSize: '25px'}}>We're on Instagram!</p>
      </div>
      <div style={Styles.imagewrapper}>
        <img src={taddy} alt="Girl in a jacket" width="15%" height='15%' style={{borderRadius: '20px'}}/>
        <img src={taddy} alt="Girl in a jacket" width="15%" height='15%' style={{borderRadius: '20px'}}/>
        <img src={taddy} alt="Girl in a jacket" width="15%" height='15%' style={{borderRadius: '20px'}}/>
        <img src={taddy} alt="Girl in a jacket" width="15%" height='15%' style={{borderRadius: '20px'}}/>
        <img src={taddy} alt="Girl in a jacket" width="15%" height='15%' style={{borderRadius: '20px'}}/>
        <img src={taddy} alt="Girl in a jacket" width="15%" height='15%' style={{borderRadius: '20px'}}/>
      </div>
      <button onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} style={ hover ? Styles.buttonhover: Styles.button }>See More photos</button>
    </div>
  );
}

export default Instagram;
