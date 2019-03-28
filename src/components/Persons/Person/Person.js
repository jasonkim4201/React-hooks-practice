import React, { Component } from 'react';
import classes from './Person.module.css';
import withClass from "../../../hoc/withClass";
import Auxiliary from "../../../hoc/Auxilary";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

componentDidMount() {
    this.inputElementRef.current.focus();
}

    render() {
        
        console.log("[Person.js] rendering...")
        return (
            <React.Fragment>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                <p key="key1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p key="key2">{this.props.children}</p>
                <input key="key3"
                    // ref={(inputEle) => {this.inputElement = inputEle}} 
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </React.Fragment> 
        );
    }
};

export default withClass(Person, classes.Person);