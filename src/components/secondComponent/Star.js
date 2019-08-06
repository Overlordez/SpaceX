import React from 'react';
import '../../sass/star.scss'
import Footer from '../Footer';

export class Star extends React.Component{


    componentDidMount() {
        document.body.classList.add("star-body");
    }

     
    componentWillUnmount() {
        document.body.classList.remove('star-body')
    }


    render(){
        return(
            <div>

                <section>
                    <h1> STAR. What is this?  </h1>
                    <h1> On this page you will find out what the star is.  </h1>
                </section>

                <section className="starInfo">
                    <img className="image-item" src="item-image/item-sun.png" height="300" alt="..." />
                    <p>
Today, one of the components of our galaxy is the stars. Roasted, large body in which thermonuclear reactions occur, as a result of which, we get heat, light. It is impossible to imagine what we would have been without this celestial body.</p>

                    <p>  Stars are formed from a gas-dust medium (mainly from hydrogen and helium) as a result of gravitational compression. The temperature of matter in the bowels of stars is measured by millions of Kelvin, and on their surface by thousands of Kelvin. The energy of the vast majority of stars is released as a result of thermonuclear reactions of the conversion of hydrogen into helium, which occur at high temperatures in the inner regions.
 

                    </p>

                </section>

                <section className="imageStar">
                    <img className="starImage" src="/image/sun.jpg"  alt="..." />
                    <img className="starImage" src="/image/sun1.jpg" alt="..." />
                </section>
            
     
           <Footer/>
    
    
    
            </div>
        );
    }
  
}

export default Star;