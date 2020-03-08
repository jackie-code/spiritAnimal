import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {listOfQ} from './listOfQ';

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {choice:0};
    }
    sayHi() {console.log("hi")};
    nextQuestion = (myPath) => {  
        console.log(this.props.history.push());
        this.props.history.push(`${myPath < 20 ? '/question/' + (Number(myPath) + 1): "/result"}`)
    }

    updateState = (value) => {
        console.log(value);
        this.setState({choice: value})
    }
    
    render() {
        let myPath = this.props.match.params.number;
        const question = listOfQ[myPath-1];
      //  let getPoints = {item[Object.keys(item)[1]]}.checked;
        console.log(this.state.choice);
        const showQuestions = question.answer.map(item => {
            return(
            <li><input type="radio" name="questions" value={item[Object.keys(item)[1]]} onChange={ (e) => this.updateState(e.target.value) }/>{item[Object.keys(item)[0]]} </li>
            );
        }) 

        console.log(showQuestions);
        console.log(question)
       console.log(myPath);
       console.log(this.props);
        return(
            <div>
                <h2>this is a question{myPath}</h2>
                <ol>{showQuestions}
                    {/* <li><input type="checkbox" name="questions" />a</li>
                    <li><input type="checkbox" name="questions" />b</li>
                    <li><input type="checkbox" name="questions" />c</li>
                    <li><input type="checkbox" name="questions" />d</li> */}
                </ol>
                {/* <Link to={`${myPath < 20 ? '/question/' + (Number(myPath) + 1) : "/result"}`}>Next Question</Link> */}
            </div>
        )
    }
}

export default Questions;









