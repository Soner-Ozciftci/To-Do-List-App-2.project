import React ,{useState} from 'react';
import ' ./App.css';


function App() {



  return (
    <div className="App">
<h1>Todo List App</h1>



<input type="text" placeholder='add an item..' />



<button>Add</button>
<ul>
  <li>Spor yapılacak</li>
  <li>Spor yapılacak</li>
  <li>Spor yapılacak</li>
</ul>
    </div>
  );
}

export default App;
