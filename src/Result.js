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
            <div>
            <div id="contain">
                     <h2>{myAnimal.name}</h2>
        <img id="animalImage" src={require(`${myAnimal.picture}`)} ></img>
                <div>
                <button id="retake" onClick={(e) => this.startOver(e)}>Retake</button>
                </div>
                
            </div>
            <div id="describe">
                <p> {myAnimal.description}</p>
                </div>
            </div>
        )
    }
   
}





