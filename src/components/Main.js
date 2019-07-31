import React from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom';





function Main() {
  return (
   
    <div className="title">
      <section className="pre-info">
        <h2> How much you know about SPACE? </h2>
        <h1> Press the SPACE button to learn about the secret world. </h1>
        <Link  className="space" to="/space" > SPACE </Link>
      </section>
      <Footer />
    </div>
    
  )
}

export default Main;