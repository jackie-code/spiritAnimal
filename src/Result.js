import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {animals} from './animals';



export default class Result extends Component {
    constructor (props){
    super(props);
    
    }

    startOver = (event) => {
        event.preventDefault();
        console.log('this is working');
        this.props.clearState();
        this.props.history.push('/');

    } 

    getMaxAnimal(values) {
        let max = "a";
        for (let key in values) {
                if (values[key] > values[max]) {
                    max = key;
                }
        }
        return max;
    }


    //let plus5 = arr.map((val, i, arr) => {
 //     return val + 5;
  //  });


    render() {
        console.log(animals.a.picture);

       
        console.log(this.props);
        console.log(this.getMaxAnimal(this.props.results))
            
           
        
    

    
        return(
            <div>
                     <h2>This is who you are</h2>
        <span>some "spirit animal" goes here </span>
        <img src='../public/images/baboon_bird.jpg' width='50px'></img>
                <Link to="/">Retry</Link>
                <button onClick={(e) => this.startOver(e)}>Clear</button>
            </div>
        )
    }
   
}