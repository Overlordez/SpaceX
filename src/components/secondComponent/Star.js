import React, { useEffect } from 'react';
import '../../sass/star.scss'

export class Star extends React.Component{


    componentDidMount() {
        document.body.classList.add("star-body");
    }

     
    componentWillUnmount() {
        document.body.classList.remove('star-body')
    }


    render(){
        return(
            <React.Fragment>
               <h1> WELCOME </h1>
    
    
    
    
    
            </React.Fragment>
        );
    }
  
}

export default Star;