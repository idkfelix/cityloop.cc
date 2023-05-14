import React from 'react';
import logo from '../../assets/logo.png';

function Home() {

  return (
    <>
      <div className="background"></div>
      <div className="centered">
        <a href="/"><img src={logo} alt="Cityloop Logo" className="logo"/></a>
      </div>
      <div className="home-container">
        <div className="centered">
          <a href="/catalog"><button className="home-button">shop</button></a>
          <a href="https://youtube.com/@via.cityloop"><button className="home-button">videos</button></a>
        </div>
      </div>
    </>
  );
}

export default Home