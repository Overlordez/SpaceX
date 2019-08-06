import React from "react";
import '../../sass/nebula.scss'
import Footer from '../Footer';

export class Nebula extends React.Component{


    constructor(props) {
        super();
    }

    //  add className to body
    componentDidMount() {
        document.body.classList.add("nebula-body");
    }

    //  remove className from body
    componentWillUnmount() {
        document.body.classList.remove('nebula-body')
    }


    
    render(){
        return(
            <div>
           <section>
                    <h1> NEBULA. What is this?  </h1>
                    <h1> On this page you will find out what the nebula is.  </h1>
                </section>
                
                <section className="nebulaInfo">
                    <img className="image-item" src="https://pngimage.net/wp-content/uploads/2018/06/nebulosa-png-transparente-1.png" height="270" alt="..." />
                    <p>

                    
The word nebula itself comes from the Latin "nebula", which means "cloud". In fact, it is a dust and gas cloud that provides ideal conditions for stellar birth or death. These heavenly wonders are illuminated by inner or neighboring stars.</p>

                    <p>  

                    Nebulae contain amazing clusters of stars, dust and gas, which often affect their shape. Of course, you need a good telescope to get high-quality images. The palette of colors appears only on long exposures, showing hydrogen (pink), helium (blue), nitrogen (red) and oxygen (blue-green). 
But the nebula can be dark. This view was discovered by William Herschel, imagining dust and gas clouds devoid of starlight and too dense to transmit light.

                    </p>

                </section>

                <section className="imageStar">
                    <img className="planetImage" src=" /image/nebula.jpg" alt="..." />
                    <img className="planetImage" src=" /image/nebula1.jpg " alt="..." />
                    
                </section>

                 <Footer/>

            </div>
        );
    }
  
}

export default Nebula;