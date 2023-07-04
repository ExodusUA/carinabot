import './fonts.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import Pricing from './Pages/Pricing/Pricing';
import Download from './Pages/Download/Download';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact/Contact';
import Terms from './Pages/Terms/Terms';
import Privacy from './Pages/Privacy/Privacy';
import TermsVPS from './Pages/TermsVPS/TermsVPS';

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Menu />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/how-it-works' element={<HowItWorks />} />
            <Route exact path='/pricing' element={<Pricing />} />
            <Route exact path='/download' element={<Download />} />
            <Route exact path='/faq' element={<FAQ />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/terms-of-use' element={<Terms />} />
            <Route exact path='/privacy-and-cookies' element={<Privacy />} />
            <Route exact path='/terms-of-use-vps' element={<TermsVPS />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
