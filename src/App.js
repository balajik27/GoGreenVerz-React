import HomePage from "./home_page";
import Header from "./layout/header";
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import About from "./about";
import ContactUs from "./contact";
import Portfolio from "./portfolio";
import Services from "./services";
import Blog from "./blog";
import AOS from 'aos';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
                <Route path="/" element={<HomePage />} />   
                <Route path="/about" element={<About />} />   
                <Route path="/portfolio" element={<Portfolio />} />   
                <Route path="/services" element={<Services />} />   
                <Route path="/blog" element={<Blog />} />   
                <Route path="/contact" element={<ContactUs />} />   
          </Routes>
        </Router>
    </div>
  );
}

export default App;
