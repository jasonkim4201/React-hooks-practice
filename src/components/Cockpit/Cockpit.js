import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {  
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // http requests....
    setTimeout(() => {
      alert("saved data to cloud!");
    }, 1000);
    return () => {
      
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []); // empty array means it will only fire once. adding props.persons indicates it will not fire bc of dependency 

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
}

export default React.memo(Cockpit); //react.memo will store a snapshot of this component and if its input changes will the rerender tigger...