import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [age,setAge] = useState('');
    const [password,setPassword] = useState('');
    const handlSubmit = (events) => {
        events.preventDefault();
        


        console.log("events",events)
        
    }
  return (
    <div>
          <h1> Form handling</h1>
            <form>
                <label>Name : </label>
              <input
                  type="text"
                  placeholder='type here'
                  name='name'
                  value={''}>
              </input> <br />
                <label>Email : </label>
              <input
                  type={"email"}
                  placeholder='type here'
                  value={''}
              ></input> <br />
                <label>Password : </label>
              <input
                  type={"password"}
                  placeholder='type here'
                  value={''}
              ></input> <br />
                <label>age : </label>
              <input
                  type={"number"}
                  placeholder='type here'
                  value={''}
              ></input> <br />
                <label>Description : </label>
              <textarea name='Description'
                  placeholder='type here'
              ></textarea> <br />
              <input
                  type="submit"
                  onClick={handlSubmit} /> <br />
            </form>
    </div>
  )
}

export default Form
