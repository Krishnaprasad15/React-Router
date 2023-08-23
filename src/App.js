// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom' 
import Home from './Components/Home';
// import About from './Components/About';
import Nav from './Components/Nav';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProducts from './Components/NewProducts';
import Users from './Components/Users';
import UserData from './Components/UserData';
import Admin from './Components/Admin';
const LazyAbout = React.lazy(()=>import('./Components/About'))
function App() {
  return (
    <div className="App">
      <>
      <Nav/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='about' element= {
            <React.Suspense fallback='loading...'>
               <LazyAbout/>
            </React.Suspense>
        }/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='products' element={<Products/> }>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featuredProducts' element={<FeaturedProducts/>}/>
          <Route path='newProducts' element={<NewProducts/>}/>
        </Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserData/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path='*' element={ <NoMatch/> }/>
      </Routes>
      </>
    </div>
  );
}

export default App;
