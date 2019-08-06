import React from 'react';
import '../sass/about.scss'
import Footer from './Footer';
export class About extends React.Component {

    constructor(props) {
        super();
    }

    //  add className to body
    componentDidMount() {
        document.body.classList.add("about-body");
    }

    //  remove className from body
    componentWillUnmount() {
        document.body.classList.remove('about-body')
    }

    render() {
        return (
            <div>
                <div className="content">
                    <div className="wrapper">
                        <h1> Welcome </h1>

                        <p> On the SPACE BOOK website, we want to show you a mini encyclopedia about space. This project is supported by UNESCO, SpaceX, NASA and others.</p>

                    </div>

                    <div className="helper">

                        <img className="sponsors"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png" height="150" alt="..." />
                        <img className="spaceX" src="https://www.logolynx.com/images/logolynx/d2/d2e451c6d3942185db25755e945a8335.png" height="30" alt="..." />
                        <img className="sponsors" src="https://logodix.com/logo/94036.png" height="140" alt="..." />
                        <img className="sponsors" src="https://itc.ua/wp-content/uploads/2019/01/1facebook_mobile_experience_1920x1080-10.png" height="140" alt="..." />

                    </div>



                </div>

                <div className="container">
                    <div className="row flex-md-row-reverse align-items-md-center first-block ">
                        <div className="col-md-6">
                            <h1> OUR STORY </h1>
                            <div className='blackBlock'></div>

                        </div>
                        <div className="col-md-6">
                            <p> 
We started working back in 2007. Then we still did not think about what we would work on, as a result, we agreed on space, because space at the moment is completely poorly studied.</p>

                          <p> We created this site so that people learn a little about space, get to know it. Initially, it was planned to create a video clip on which it would be fully told briefly about space, but then we thought and decided to make an interactive site separately. </p>

                          <p> 
At the end of 2016, we began to cooperate with NASA, SpaceX, UNESCO and began to study space with it. For 3 years we managed to discover 20 exo-planets, 13 new galaxies. We began to improve spacecraft for space travel. All this, we give to humanity, so that it would further develop. </p>


                        </div>

                    </div>

                </div>

                <Footer/>

            </div>
        )
    }

}


export default About;