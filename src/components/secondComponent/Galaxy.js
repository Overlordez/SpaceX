import React, { useEffect } from 'react';
import '../../sass/galaxy.scss';

export class Galaxy extends React.Component{

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

    


    render(){
        return(
            <React.Fragment>
               <h1> WELCOME </h1>
    
    
    
    
    
            </React.Fragment>
        );
    }
  
}

export default Galaxy;