import React from 'react';
import '../sass/space.scss';
import Footer from './Footer';
import {Link} from 'react-router-dom';





class Space extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        document.body.classList.add("space-body")
    }
    componentWillUnmount() {
        document.body.classList.remove("space-body")
    }


    render() {
        return (
            <div>
                <div className="contain">
                <Link to="/galaxy">
                <div className="item">
                <img className="image-item" src="item-image/item-galaxy.png" height="420" alt="..." />
                <h1> Galaxy </h1>
                </div>
                </Link>
                </div>

           <div className="contain">
           <Link to="/star">
           <div className="item">
           <img className="image-item" src="item-image/item-sun.png" height="420" alt="..." />
           <h1>STAR</h1>
           </div>
           </Link>
           </div>

           <div className="contain">
           <Link to="/planet">
           <div className="item">
           <img className="image-item" src="item-image/item-planet.png" height="400" alt="..." />
           <h1>PLANET</h1>
           </div>
           </Link>
           </div>

           <div className="contain">
           <Link to="/nebula">
           <div className="item">
           <img className="image-item" src="item-image/item-nebula.png" height="400" alt="..." />
           <h1>NEBULA</h1>
           </div>
           </Link>
           </div>

           <div className="contain">
           <Link to="/blackHole">
           <div className="item">
           <img className="image-item" src="item-image/item-blackhole.png" height="400" alt="..." />
           <h1>BLACK HOLE</h1>
           </div>
           </Link>
           </div>
               
          <Footer/>
      
            </div>
        )
    }


}

export default Space;