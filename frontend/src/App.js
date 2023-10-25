import { useEffect, useState } from 'react';
import './App.css'
import { ToDo } from './Components/ToDo';
import { addToDo, getAllToDo ,updateTodo ,deleteToDo} from './Utils/HandleApi';



// import { updateToDo } from '../../backend/Controllers/ToDoController';

function App() {
  const[todo ,setToDo] = useState([])
  const[text,setText] = useState("")
  const[isUpdating,setIsUpdating] = useState(false)
  const [todoId,settodoId] = useState("")
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode =(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    settodoId(_id)
  }
  return (
    <div className="App">
     <div className="container">
      <h1>To Do App</h1>
      <div className="top">
        <input 
        type="text" placeholder="Add todo..."
         name="" id="" 
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>
          
          <div 
          className="add" 
           onClick={isUpdating?()=>updateTodo(todoId,text,setToDo,setText,setIsUpdating): ()=>addToDo(text,setText,setToDo)}>
            {isUpdating?"Update":"Add"}</div>
      </div>
      <div className="list">
        {todo.map((item)=> <ToDo 
        key={item.id}
         text={item.text}
         updateMode={()=>updateMode(item._id,item.text)} 
        deleteToDo={()=>deleteToDo(item._id,setToDo)} />)}

      
      </div>
     </div>
    </div>
  );
}

export default App;
