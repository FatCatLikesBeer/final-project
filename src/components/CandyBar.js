import { useState, useReducer, useEffect } from "react";
import submitAPI from "../mockAPI.js";

export default function CandyBar(){

  const Section0 = () => {
    const handleClick = () => { alert("Ohh baby, look at you clicking thangs") }

    return (
      <div style={{paddingBottom: "20px"}}>
        <h1>Testing Page</h1>
        <h2>This is where I test difficult tools and concepts.</h2>
        <button onClick={ handleClick }>Button</button>
      </div>
    );
  }

  const Section1 = () => {

    const [greeting, setGreeting] = useState({
      greet: "Hello",
      place: "World",
    })

    // How to update state using complex data.
    // Using the 'prevState' object. This is built into react.
    function updateGreeting() {
      setGreeting(prevState => {
        return {...prevState, place: "World-Wide Web"}
      })
    }

    // More intuitive way of updating state.
    function revertGreeting() {
      const newGreeting = {...greeting}
      newGreeting.place = "World";
      setGreeting(newGreeting);
    }

    return ( 
      <div style={{paddingBottom: "20px"}}>
        <h1>useState</h1>
        <h2>{greeting.greet}, {greeting.place}</h2>
        <button onClick={updateGreeting}>Update</button>
        <button onClick={revertGreeting}>Revert</button>
      </div>
    );
  }

  const Section2 = () => {

    // This is the reducer functions logic.
    // It takes two things and returns one.
    const reducer = (state, action) => {
      if (action.type === "buy_ingredients") return {money: state.money - 10};
      if (action.type === "sell_a_meal") return {money: state.money + 10};
      if (action.type === "celebrity_visit") return {money: state.money + 5000};
      if (action.type === "employe_injury") return {money: state.money - 5000};
      console.log(state.money);
      return state;
    }

    // A more sensible option of how useReducer ought to be used is startsWith 
    // A switch statement instead. So I made one below.
    const reducerCase = (state, action) => {
      switch (action.type) {
        case "buy_ingredients":
          return { money: state.money - 10 }
        case "sell_a_meal":
          return { money: state.money + 10 }
        case "celebrity_visit":
          return { money: state.money + 5000 }
        case "employe_injury":
          return { money: state.money - 5000 }
        default:
          console.log("I'm using a switch case thingy")
          console.log(state);
          return state;
      }
    }

    // Initing the useReducer hook.
    // The useReducer hook takes two arguments: a reducer function and an initial object.
    // The useReducer hook returns a state variable and a dispatch function.
    // The dispatch function is basically the reducer function defined above.
    const [state, dispatch] = useReducer(reducerCase, { money: 100 });

    return(
      <div style={{paddingBottom: "20px"}}>
        <h1>useReducer</h1>
        <h2>Wallet: {state.money}</h2>
        <div>
          <button onClick = {() => dispatch({type: "buy_ingredients"})}>Go shopping</button>
          <button onClick = {() => dispatch({type: "sell_a_meal"})}>Serve Food</button>
          <button onClick = {() => dispatch({type: "celebrity_visit"})}>Celeb Visit</button>
          <button onClick = {() => dispatch({type: "employe_injury"})}>Worker Hurt</button>
          <button onClick = {() => dispatch({type: "nothing_here"})}>Nothing</button>
        </div>
      </div>
    );
  }

  // Testing to see if I can pass props up components
  const Section3 = () => {
    const Head = () => {
      return (
        <>
          <h1>Passing props up and down</h1>
          <h2>Specifically, a reducer method as props</h2>
        </>
      );
    }

    const ParentComponent = () => {
      const [passedValue, setPassedValue] = useState("no button clicked");
      const reducer = (state, action) => {
        const txt = `Passed "${action.type}" through the reducer`;
        setPassedValue(txt);
        switch (action.type) {
          case "type1":
            return "Alpha";
          case "type2":
            return "Beta";
          case "type3":
            return "Gamma";
          default:
            return "Defaulted";
        }
      }

      const initialValue = "Initial State";

      const [state, dispatch] = useReducer(reducer, initialValue);

      return (
        <>
          <p>State @ parent level: {state}</p>
          <br />
          <p>{passedValue}</p>
          <br />
          <ChildComponent dispatch={dispatch} state={state}/>
        </>
      );
    }

    const ChildComponent = (props) => {
      const dispatcher = props.dispatch;
      const getState = props.state;
      return (
        <>
          <button onClick={() => dispatcher({type: "type1"})}>Type1</button>
          <button onClick={() => dispatcher({type: "type2"})}>Type2</button>
          <button onClick={() => dispatcher({type: "type3"})}>Type3</button>
          <button onClick={() => dispatcher({type: ""})}>Nothing</button>
          <br />
          <p>State @ child level: {getState}</p>
        </>
      );
    }

    return (
      <div style={{paddingBottom: "20px"}}>
        <Head />
        <ParentComponent />
      </div>
    );
  }

  const Section4 = () => {
    const [showElement, setShowElement] = useState(false);

    const handleButton = () => {
      setShowElement(submitAPI());
    }

    const Button = () => {
      return <button onClick={handleButton}>Button</button>
    }

    function Header() {
      return (
        <>
          <h1>Working with mockAPI</h1>
          <p>{null}</p>
        </>
      );
    };

    const ShowThisElement = () => {
      return (
        <>
          { 
            showElement
              && 
              <div>
                <p>
                  The API is working!
                </p>
                <p>
                  Because it's not a real API :)
                </p>
              </div>
          }
        </>
      );
    }

    return (
      <>
        <Header />
        <ShowThisElement />
        <Button />
      </>
    );
  }

  return (
    <>
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};
