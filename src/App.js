import './App.css';
import TourList from './components/TourList'
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutPage from './pages/aboutPage/AboutPage';
import Mode from './components/Mode/Mode';




function App() {
  const [mode, setMode] = useState({current:"day"})
  
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TourList />}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/profile' element={<Mode mode={mode} changeMode={setMode}/>}/>
      </Routes>
      
    </BrowserRouter>
  </div>
      
  )
}


export default App;
