import './App.css';
import Header from './components/header/Header'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
       <Header/> 
          <Routes>
                <Route ex path='/' element={<Home/>}/>
          </Routes>
    </div>
  );
}

export default App;
