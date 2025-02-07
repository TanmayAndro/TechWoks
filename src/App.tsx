import React,{useRef} from 'react';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Check from './Component/OurVision';
import Footer from "./Component/Footer";


function App() {
  const serviceRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const careerRef = useRef(null);
  const getInTouchRef = useRef(null);

const scrollToSection = (ref:any) => {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const handleOpenPage = (url:string) => {
 console.log(url)
  switch (url) {
    case '/service':
      scrollToSection(serviceRef);
      break;
    case '/casestudies':
      scrollToSection(caseStudiesRef);
      break;
    case '/careers':
      scrollToSection(careerRef);
      break;
    case '/getintouch':
      scrollToSection(getInTouchRef);
      break;  
    default:
      break; // Optionally handle other cases or do nothing
  }
};
  return (
    <>
    <Navbar handleOpenPage={handleOpenPage} />
    <Home serviceRef={serviceRef} caseStudiesRef={caseStudiesRef} careerRef={careerRef} getInTouchRef={getInTouchRef}/>
    <Footer handleOpenPage={handleOpenPage}/>
    {/* <Check/> */}
    </>
  );
}

export default App;
