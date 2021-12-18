import './App.scss';
import React, { useContext, useState } from 'react'
import Header from './components/header/heder';
import Footer from './components/Footer/Footer';
import { Context } from './Context/Theme';
function App() {
  const ctx = useContext(Context)
  
  return (
    <>
      <Header />
      
      <Footer />
    </>
  );
}

export default App;
