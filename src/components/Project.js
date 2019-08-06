import React from 'react';
import '../sass/project.scss';

export class Project extends React.Component {

    constructor(props) {
        super();
    }

    //  add className to body
    componentDidMount() {
        document.body.classList.add("project-body");
    }

    //  remove className from body
    componentWillUnmount() {
        document.body.classList.remove('project-body')
    }


    render(){
        return(
            <div className='info'>
    
      <section className="thanks">

<h2> 
Many thanks to NASA, SpaceX, UNESCO and others for the support and information provided.
This project was done solely for educational purposes. </h2>



<h2> 
If you want to help us, then write here spacebook@gmail.com

Our contact details
Phone: 164 62 51

Our office:
Binderman Street 21, 6th floor </h2>
  <img className="hand" src="https://pngicon.ru/file/uploads/rukopojatie.png" height="300" alt="..."/>

      </section>
    
    
            </div>
        )

    }
   
}

export default Project;