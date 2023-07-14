import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import ForthComponent from './components/ForthComponent';
import FifthComponent from './components/FifthComponent';
import SixthComponent from './components/SixthComponent';
import SeventhComponent from './components/SeventhComponent';
import EighthComponent from './components/EighthComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pdf/biloliddin' exact element={<FirstComponent />} />
        <Route path='/pdf/diyora' exact element={<SecondComponent />} />
        <Route path='/pdf/bexruz' exact element={<ThirdComponent />} />
        <Route path='/pdf/madina' exact element={<ForthComponent />} />
        <Route path='/pdf/maftuna' exact element={<FifthComponent />} />
        <Route path='/pdf/nilufar' exact element={<SixthComponent />} />
        <Route path='/pdf/otabek' exact element={<SeventhComponent />} />
        <Route path='/pdf/xadija' exact element={<EighthComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
