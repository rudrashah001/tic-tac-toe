import './App.css'
import Board from './Board.jsx';

function App() {

  return (
    <div className= 'min-h-screen flex item-center justify-center bg-blue-300'>
      <div className="bg-gray-100 p-3 rounded-xl shadow-lg max-w-md">
       <h1 className="text-3xl font-bold underline mb-6">
        tic tac toe
       </h1>
       <Board />
       
    </div>
    </div>
  )
    
      
}

export default App













