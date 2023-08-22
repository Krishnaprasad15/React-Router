// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom' 
import Home from './Components/Home';
import About from './Components/About';
import Nav from './Components/Nav';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
function App() {
  return (
    <div className="App">
      <>
      <Nav/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='about' element= {<About/>}/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='*' element={ <NoMatch/> }/>
      </Routes>
      </>
    </div>
  );
}

export default App;
