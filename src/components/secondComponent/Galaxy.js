import React from 'react';
import '../../sass/galaxy.scss';
import Footer from '../Footer';



export class Galaxy extends React.Component {

    constructor(props) {
        super();
    }



    componentWillMount() {
        document.body.classList.add('galaxy-body')
        console.log('MOUNT');

    }
    componentWillUnmount() {
        document.body.classList.remove('galaxy-body')
        console.log('UNMOUNT');
    }




    render() {
        return (
            <div>
                <section>
                    <h1> GALAXY. What is this?  </h1>
                    <h1> On this page you will find out what the galaxy is.  </h1>
                </section>

                <section className="galaxyInfo">
                    <img className="image-item" src="https://cdn140.picsart.com/268642782018211.png?r1024x1024" height="400" alt="..." />
                    <p>Most of the visible objects in the universe are galaxies - huge collections of stars, planets, gas and dust. The smallest of them have several million stars, and the largest millions of millions.</p>

                    <p>  Galaxies are surprising in that they do not have sharp boundaries, so it is not possible to strictly determine their size. And their total radiation power or, in other words, luminosity varies even more than the size: from several million luminosities of the Sun to several hundred billion luminosities.
 

                    </p>

                </section>



                <section className="imageGalaxy">
                    <img className="galaxyImage1" src="http://hdqwalls.com/wallpapers/spiral-galaxy-space-stars-universe-4k-5i.jpg"  alt="..." />
                    <img className="galaxyImage" src="http://www.zaynabacademyonline.org/wp-content/uploads/2015/11/images-1.jpg" alt="..." />
                    <img className="galaxyImage" src="https://s1.funon.cc/img/orig/201802/08/5a7c20d15cb97.jpg" alt="..." />

                </section>

                <Footer />


            </div>
        );
    }

}

export default Galaxy;