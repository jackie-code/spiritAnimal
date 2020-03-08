import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {listOfQ} from './listOfQ';

class Questions extends Component {

    constructor(props) {
        super(props);
    }
    sayHi() {console.log("hi")};
    nextQuestion = () => {  
    }
    
    render() {
        let myPath = this.props.match.params.number;
        const question = listOfQ[myPath-1];

        const showQuestions = listOfQ[0].answer.map(item => {
            return(<li>hello</li>);
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
                <Link to={`${myPath < 20 ? '/question/' + (Number(myPath) + 1) : "/result"}`}>Next Question</Link>
            </div>
        )
    }
}

export default Questions;









