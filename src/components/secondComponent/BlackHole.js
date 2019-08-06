import React from "react";
import '../../sass/blackhole.scss';
import Footer from '../Footer';

export class BlackHole extends React.Component{



 //  add className to body
    componentDidMount() {
        document.body.classList.add("blackhole-body");
    }

    //  remove className from body
    componentWillUnmount() {
        document.body.classList.remove('blackhole-body')
    }



    render(){
        return(
            <div>
        <section>
                    <h1> BlackHole. What is this?  </h1>
                    <h1> On this page you will find out what the blackhole is.  </h1>
                </section>
    
                <section className="blackholeInfo">
                    <img className="image-item" src="http://www.transparentpng.com/thumb/black-hole/black-hole-png-7.png" height="300" alt="..." />
                   

                <p>
A black hole is a region of space-time whose gravitational attraction is so great that even objects moving at the speed of light, including quanta of light itself, cannot leave it. The boundary of this region is called the event horizon, and its characteristic size is called the gravitational radius. In the simplest case of a spherically symmetric black hole, it is equal to the Schwarzschild radius.

                    </p>

                </section>
    
                <section className="imageStar">
                    <img className="planetImage" src=" /image/blackhole.jpg" alt="..." />
                    <img className="planetImage" src=" /image/blackhole1.jpg " alt="..." />
                    
                </section>

                <Footer/>
    
            </div>
        );
    }
  
}

export default BlackHole;