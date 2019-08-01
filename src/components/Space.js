import React, { useEffect } from 'react';
import '../sass/space.scss';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Star from './secondComponent/Star';




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
                <div className="container">
                <Link to="/galaxy">
                <div className="item">
                <img className="image-item" src="https://www.stickpng.com/assets/images/580b585b2edbce24c47b2717.png" height="470" alt="..." />
                <h1> Galaxy </h1>
                </div>
                </Link>
                </div>

           <div className="container">
           <Link to="/star">
           <div className="item">
           <img className="image-item" src="https://www.stickpng.com/assets/images/580b585b2edbce24c47b2714.png" height="470" alt="..." />
           <h1>STAR</h1>
           </div>
           </Link>
           </div>

           <div className="container">
           <Link to="/planet">
           <div className="item">
           <img className="image-item" src="https://img.pngio.com/planet-png-hd-transparent-planet-hd-planet-png-2200_2200.png" height="450" alt="..." />
           <h1>PLANET</h1>
           </div>
           </Link>
           </div>

           <div className="container">
           <Link to="/nebula">
           <div className="item">
           <img className="image-item" src="https://avatanplus.com/files/resources/mid/5682768cb9743151ed9f15d8.png" height="450" alt="..." />
           <h1>NEBULA</h1>
           </div>
           </Link>
           </div>

           <div className="container">
           <Link to="/blackHole">
           <div className="item">
           <img className="image-item" src="https://avatanplus.com/files/resources/mid/583f58ef90115158b77367e6.png" height="450" alt="..." />
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