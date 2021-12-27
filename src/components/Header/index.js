import React, { useState } from 'react';
import { Styles } from "./styles";
import head  from '../.././assets/image1.jpg'

const Header = () =>  {

	const [hover, setHover] = useState(false)

  return (
    <div style={{  
      backgroundImage: `url(${head})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      //height: '100%'
    }}>
      <div style={Styles.card}>
        <div style={Styles.cardcontent}>
          <h6 style={{color: '#a1e312'}}>Say Hello to ToyStore</h6>
          <p style={{marginTop: 0, marginBottom: 0, fontSize: 30, fontFamily: 'Work Sans sans-serif'}}>Free Ecommerce</p>
          <p style={{marginTop: 0, fontSize: 30, fontFamily: 'Work Sans sans-serif'}}>Template for Webflow</p>
          <button onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} style={ hover ? Styles.buttonhover: Styles.button }>Open Catalog</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
