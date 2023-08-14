import React ,{useState} from 'react';
import './App.css';


function App() {

const [newItem , setNewItem]= useState("");

function addItem(){
 console.log(newItem) 
}


  return (
    <div className="App">
<h1>Todo List App</h1>



<input
type="text"
 placeholder='add an item..' 
 value={newItem}
 onChange={e => setNewItem(e.target.value)}
 />



<button onClick={()=> addItem()} >Add</button>
<ul>
  <li>Spor yapılacak</li>
  <li>Spor yapılacak</li>
  <li>Spor yapılacak</li>
</ul>
    </div>
  );
}

export default App;
