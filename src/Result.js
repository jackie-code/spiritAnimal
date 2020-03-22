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

        let myAnimal = animals[this.getMaxAnimal(this.props.results)]

       
        console.log(this.props);
        console.log(this.getMaxAnimal(this.props.results))
            
           
        
    

    
        return(
            <div id="contain">
                     <h2>This is who you are</h2>
        <p>some "spirit animal" goes here </p>
        <img id="animalImage" src={require(`${myAnimal.picture}`)} ></img>
                <div>
                <Link to="/">Retry</Link>
                </div>
                <button onClick={(e) => this.startOver(e)}>Clear</button>
            </div>
        )
    }
   
}





