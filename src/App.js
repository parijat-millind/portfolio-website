import './App.css'
import Intro from "./intro/Intro";
import Service  from "./service/Service";
import Contact from "./contact/Contact";
import Testimonial from "./testimonial/Testimonial";
import Navbar from './navbar/Navbar';
import {themeContext} from './Context';
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black' : '',
      color : darkMode? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Service/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
