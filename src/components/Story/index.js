import React from 'react';
import { Styles } from "./styles";
import head  from '../.././assets/taddy7.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import { faPlay} from '@fortawesome/free-solid-svg-icons'

const Story = () =>  {
  return (
    <div style={{  
      backgroundImage: `url(${head})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // width: '100%'
    }}>
      <div style={Styles.card}>
        <div style={Styles.cardcontent}>
          <p style={{fontSize: '13px'}}>About the shop</p>
          <p style={{fontSize: '25px', marginTop: '0px'}}>Watch our story</p>
          <p style={{fontSize: '13px'}}>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
          <p style={{fontSize: '13px', marginTop: '0px'}}>A random paragraph can also be an excellent way for a writer to tackle writers</p>
          <div style={{height: 50, width: 50, borderRadius: 50, backgroundColor: '#a1e312', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:20}}>
          	<FontAwesomeIcon icon={faPlay} size="1x" color="#fff"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
