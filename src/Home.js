import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor (props){
    super(props);
    }
    render() {
        return(
            <div>
                     <h2>User Name</h2>
                <input type="text" placeholder="type your name" value={this.props.username} onChange={(event) => this.props.updateUserName(event)} />
                <br></br>
                <Link to="/question/1">Continue</Link>
            </div>
        )
    }
   
}






