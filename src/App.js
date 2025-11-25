import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Routings from './Routings';
import { useLocation } from 'react-router-dom';
import { createContext, useState } from 'react';
export const store= createContext()
function App() {

  const [token , setToken]=useState('')

  const location = useLocation()

  const isLocation = location.pathname.startsWith('/admindashboard')
  return (
    <store.Provider value={[token,setToken]}>
      {!isLocation && <Header />}
      <Routings />
      {!isLocation && <Footer />}
    </store.Provider>
  );
}

export default App;
