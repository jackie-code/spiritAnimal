import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {listOfQ} from './listOfQ';

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {choice:""};
    }
    
    nextQuestion = (myPath) => {  
        console.log(this.props.history.push());
        
    }

    updateChoiceSelected = (value) => {
        console.log('You Have selected ', value);
        this.setState({choice: value}, () => {
            console.log(this.state.choice)
        })
    }
    
    updateAppState = (event, myPath) => {
        event.preventDefault();
        this.props.updateAnimal(this.state.choice);
        this.props.history.push(`${myPath < 20 ? '/question/' + (Number(myPath) + 1): "/result"}`);
        //console.log('SENDING ANSWER', this.state.choice)
        
    }


    render() {
        let myPath = this.props.match.params.number;
        const question = listOfQ[myPath-1];
      //  let getPoints = {item[Object.keys(item)[1]]}.checked;
        console.log(this.props);
        const showQuestions = question.answer.map(item => {
            return(
            <li><input type="radio" name="questions" value={Object.keys(item)[0]} onChange={ (e) => this.updateChoiceSelected(e.target.value) }/>{item[Object.keys(item)[0]]} </li>
            );
        }) 
    //     console.log(showQuestions);
    //     console.log(question)
    //    console.log(myPath);
       console.log(this.props);
        return(
            <div>
                <h2>this is question{myPath}</h2>
                <ol>{showQuestions}
                    {/* <li><input type="checkbox" name="questions" />a</li>
                    <li><input type="checkbox" name="questions" />b</li>
                    <li><input type="checkbox" name="questions" />c</li>
                    <li><input type="checkbox" name="questions" />d</li> */}
                </ol>
                <button onClick={e => this.updateAppState(e, myPath)} id="next">Next Question</button>
            </div>
        )
    }
}

export default Questions;


//                <Link to={`${myPath < 20 ? '/question/' + (Number(myPath) + 1) : "/result"}`}>Next Question</Link>







