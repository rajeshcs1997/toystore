import React from 'react';
import { Styles } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'
import taddy3  from '../.././assets/taddy3.jpeg'
import taddy2  from '../.././assets/taddy2.jpeg'

const Toycard = () =>  {
  return (
    <div>
      {/*stuffed toy*/}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 100, marginRight: 100, marginTop: 80}}>
        <p style={{fontFamily: 'Hina Mincho serif', fontSize: 25}}>Stuffed Animals</p>
        <p style={{fontSize: 15}}>See All Toys<FontAwesomeIcon icon={faArrowAltCircleRight} size="1x" style={{marginLeft: 20}} /></p>
      </div>
      <div style={Styles.linecontainer}>
      	<hr style={{border: '1px solid #a1e312', width: '10%'}} />
      	<hr style={{width: '90%'}}/>
      </div>
      <div style={Styles.cardwrapper}>
        <div style={Styles.card}>
          <img src={taddy3} alt="Girl in a jacket" width="100" height="100"/>
          <p>Teddy Bear</p>
          <button style={Styles.button}>$ 30.00 USD</button>
        </div>
        <div style={Styles.card}>
          <img src={taddy3} alt="Girl in a jacket" width="100" height="100"/>
          <p>Mega Toy</p>
          <button style={Styles.button}>$ 30.00 USD</button>
        </div>
        <div style={Styles.card}>
          <img src={taddy3} alt="Girl in a jacket" width="100" height="100"/>
          <p>Cut dog</p>
          <button style={Styles.button}>$ 30.00 USD</button>
        </div>
        <div style={Styles.card}>
          <img src={taddy3} alt="Girl in a jacket" width="100" height="100"/>
          <p>Little Friend</p>
          <button style={Styles.button}>$ 30.00 USD</button>
        </div>
      </div>

      {/*stuffed toy*/}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 100, marginRight: 100, marginTop: 80}}>
        <p style={{fontFamily: 'Hina Mincho serif', fontSize: 25}}>Wooden Toys</p>
        <p style={{fontSize: 15}}>See All Toys<FontAwesomeIcon icon={faArrowAltCircleRight} size="1x" style={{marginLeft: 20}} /></p>
      </div>
      <div style={Styles.linecontainer}>
      	<hr style={{border: '1px solid #a1e312', width: '10%'}} />
      	<hr style={{width: '90%'}}/>
      </div>
      <div style={Styles.cardwrapper}>
        <div style={Styles.card}>
          <img src={taddy2} alt="Girl in a jacket" width="100" height="100"/>
          <p>Happy Flower</p>
          <button style={Styles.button}>$ 30.00 USD</button>
        </div>
        <div style={Styles.card}>
          <img src={taddy2} alt="Girl in a jacket" width="100" height="100"/>
          <p>Lift machine</p>
          <button style={Styles.button}>$ 30.00 USD</button>
        </div>
        <div style={Styles.card}>
          <img src={taddy2} alt="Girl in a jacket" width="100" height="100"/>
          <p>camera</p>
          <button style={Styles.button}>$ 30.00 USD</button>
        </div>
        <div style={Styles.card}>
          <img src={taddy2} alt="Girl in a jacket" width="100" height="100"/>
          <p>Little rabit</p>
          <button style={Styles.button}>$ 30.00 USD</button>
        </div>
      </div>
    </div>
  );
}

export default Toycard;
