import React, { useState } from 'react';
import { Styles } from "./styles";
import taddy1  from '../.././assets/taddy3.jpeg'

const Category = () =>  {
	const [hover1, setHover1] = useState(false)
	const [hover2, setHover2] = useState(false)

  return (
    <div>
      <div style={Styles.cardwrapper}>
        <div style={Styles.card1}>
          <img src={taddy1} alt="Girl in a jacket" width="100" height="100" />
          <div>
            <p style={{color: '#fff', fontSize: 20}}>Stuffed Animals</p>
            <button onMouseEnter={()=> setHover1(true)} onMouseLeave={()=> setHover1(false)} style={ hover1 ? Styles.buttonhover: Styles.button }>Shop Now</button>
          </div>
        </div>
        <div style={Styles.card2}>
          <div>
            <p style={{color: '#fff', fontSize: 20}}>Wooden Toys</p>
            <button onMouseEnter={()=> setHover2(true)} onMouseLeave={()=> setHover2(false)} style={ hover2 ? Styles.buttonhover: Styles.button } >Shop Now</button>
          </div>
          <img src={taddy1} alt="Girl in a jacket" width="100" height="100"/>
        </div>
      </div>
    </div>
  );
}

export default Category;
