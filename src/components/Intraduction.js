//functional Component
import { useState, useEffect } from "react";

const Introduction = (props) => {
  const [name, setName] = useState("Aksha");

  useEffect(() => {
    console.log("useEffect with no second argument");
  })

  useEffect(() => {
    console.log("useEffect with empty array as second argument");
    return(() =>{
        console.log("component will be removed");
    })
  }, [])

  useEffect(() => {
    console.log("useEffect with dependency array as second argument");
  }, [name, ])












  const handleChangeName = () => {
    setName("XYZ");
  };

  console.log("props of introduction", props, name);
  return (
    <div>
      <h1>Introduction</h1>
      <h2>Name: {name}</h2>
      <button onClick={handleChangeName}>Change name</button>
    </div>
  );
};

export default Introduction;

/**
 Functional Component uses Hooks to provide functionality of the component
 1. state (initialization, access, updating) -> useState
    syntax: 
    const [stateName, setterFunctionName] = useState(initialValueOfState)
 2. props
 3. Lifecycle phases - three phases 
  1. Mount
  2. Update 
  3. unmount - useEffect 
    useEffect(callbackFuntion, dependencyArray)   - (() => {}, [] )
    1. dependency array - optional arguments
     - No dependency array passed
     - [] -> componentDidMount()
     - [states, props] -> componentDidUpdate()
    componentWillUnmount() -> return method call from useEffect-(Cleanup)
 */
