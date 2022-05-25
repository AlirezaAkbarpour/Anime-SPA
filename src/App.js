import './App.css';
import Header from './components/header/Header'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
const imgSrc= 'https://wallpaperaccess.com/full/3732372.jpg'

function App() {
  
  return (
    <div className="App">
        <img src={imgSrc} alt='' className='background'/>
       <Header/> 
          <Routes>
                <Route ex path='/' element={<Home/>}/>
          </Routes>
    </div>
  );
}

export default App;
