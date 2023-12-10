import { useState, useReducer } from "react";

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

  return (
    <>
      <Section0 />
      <Section1 />
      <Section2 />
    </>
  );
};
