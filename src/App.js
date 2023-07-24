import './App.css';
import React from 'react';
import Header from './header-with-nav/header';
import Footer from './footer/Footer';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <>
      <Header />
      <div className='App page-container'>
        <div className="content-wrap">
          <AnimatedRoutes />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
