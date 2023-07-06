import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Singup from './component/singup/Singup';
import Login from './component/Login/Login';
import Stock from "./component/Stock/Stock"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Singup/>} />
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/stock" element ={<Stock/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
