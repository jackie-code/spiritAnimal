import React, {Component} from 'react';
import {Link} from 'react-router-dom';



export default class Result extends Component {
    constructor (props){
    super(props);
    
    }

   


    render() {
       
        console.log(this.props);
    
            
           
        
    

    
        return(
            <div>
                     <h2>This is who you are</h2>
                <span>some "spirit animal" goes here</span>
                <Link to="/">Retry</Link>
            </div>
        )
    }
   
}