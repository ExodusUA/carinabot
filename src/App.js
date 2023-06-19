import './fonts.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Menu />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
