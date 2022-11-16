import './App.css'
import Intro from "./intro/Intro";
import Service  from "./service/Service";
import Contact from "./contact/Contact";
import Testimonial from "./testimonial/Testimonial";
import Navbar from './navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
