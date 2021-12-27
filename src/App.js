import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index'
import Header from './components/Header/index'
import Category from './components/Category/index'
import Toycard from './components/Toycard/index'
import Story from './components/Story/index'
import Business from './components/Business/index'
import Subscribe from './components/Subscribe/index'
import Instagram from './components/Instagram/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <div>
      <Navbar />
      <Header /> 
      <Category />
      <Toycard />
      <Story />
      <Business />
      <Subscribe />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
