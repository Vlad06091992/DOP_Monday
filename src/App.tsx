import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {json} from "stream/consumers";


type PropsType = {
  id:number,
  userId:number,
  title:string
  completed:boolean
}

function App() {

  let[todos,setTodos] = useState<Array<PropsType>>([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((json) => setTodos(json))
    },[])

    const onclickHandler = () => {
      setTodos([])
    }




  return (
    <div className="App">
     <button onClick={onclickHandler}>clean posts</button>
      <ul>
        {todos.map(el=>{
          return(
              <li>
                  <span>{el.userId}</span>
                  <span> {el.title}</span>
                  <span> {el.id}</span>
                  <span> {el.completed}</span>
              </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
