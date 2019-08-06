import React from "react";
import Footer from'../Footer';
import '../../sass/planet.scss';

export class Planet extends React.Component{

    constructor(props) {
        super();
    }

    //  add className to body
    componentDidMount() {
        document.body.classList.add("planet-body");
    }

    //  remove className from body
    componentWillUnmount() {
        document.body.classList.remove('planet-body')
    }

    render(){
        return(
            <React.Fragment>
             <section>
                    <h1> PLANET. What is this?  </h1>
                    <h1> On this page you will find out what the planet is.  </h1>
                </section>

                <section className="planetInfo">
                    <img className="image-item" src="item-image/item-planet2.png" height="300" alt="..." />
                    <p>

                    Planet. A place where, under certain conditions, life can be born and our planet Earth is proof of this. The large spherical body on which life was born.</p>

                    <p>  
A planet is a celestial body orbiting around a star or its remnants, massive enough to become round under the influence of its own gravity, but not massive enough to start a thermonuclear reaction, and able to clear the planet orbitals around its orbit. In the understanding of the scientists of the Ptolemaic era, the planets revolved around the Earth in perfectly round orbits. The idea is the opposite - that in fact the Earth, like other planets, revolves around the Sun.

                    </p>

                </section>

                <section className="imageStar">
                    <img className="planetImage" src="https://i.pinimg.com/originals/f9/0c/05/f90c052b4c2fcf9f9434f0de3c7af2b6.jpg"  alt="..." />
                    <img className="planetImage" src="https://www.wallpaperflare.com/static/667/957/200/space-planet-light-planet-wallpaper.jpg" alt="..." />
                    
                </section>
            
     
           <Footer/>
    
    
    
    
    
            </React.Fragment>
        );
    }
  
}

export default Planet;