// import React from 'react'

// export default function App(){

//   const Alunos = [ 
//     { nome:'Letícia',cor:'Vermelho' },
//     { nome:'Paula', cor:'Rosa' }, 
//     { nome:'Raquel', cor:'Azul' }
//   ]

//   return(
//     < >
//       <ul>{Alunos.map((item) => (
//         <li>{item.nome} {item.cor}</li>
//       ))}</ul>
//     </>
//   )
// }

// ######################################

// import React,{useState} from 'react';

// export default function App() {
 
//   const [ users, setUsers ] = useState([
//   { name:"Raquel", color:'blue' },
//   { name:"Paula", color:'pink' },
//   { name:"David", color:'yellow' },
//   { name:"Marlon", color:'red' }
// ])


// function Change(){
//   setUsers([
//     { name:"Raquel", color:'blue' },
//     { name:"Paula", color:'pink' },
//     { name:"David", color:'aquamarine' },
//     { name:"Marlon", color:'red'} 
// ])
// }

//   return (
//     < >
//     <ul>{users.map( item => (
//       <li>{item.name} {item.color}</li>
//     ))}</ul>

//     <button onClick={() =>{Change()}}>Change</button>
//     </>
//   );
// }

// ######################################

// import React, {useState} from 'react'

// export default function App(){

//   const [ input, setInput ] = useState()

//   function Buy(){

//   } 

//   return(
//     < >
//     <input value={input} onChange={(event) =>{setInput(event.target.value)}}/>
//     <h1>WELCOME TO ISA'S WEBPAGE</h1>
//     <button onClick={() =>{}}>Buy</button>
//     <p>Thanks {input}</p>
//     </>
//   )
// }

// ######################################

import React, {useState} from 'react'

export default function ToDo(){

const [ input, setInput ] = useState()
const [ taskList, setTaskList ] = useState([])

const Add = () =>{

  
}

  return(
    <form onSubmit={(e) => {e.preventDefault()}}>
      <button onClick={() => {Add()}}>ADD</button>
      <input value={input} onChange={e => setInput(e.target.value)} />
    </form>
  )
}