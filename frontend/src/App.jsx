// import libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component imports
import Register from "./pages/Register";
import Login from "./pages/Login";

// utilities imports

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='text-center font-mono cursor-auto p-1 m-1 max-h-full max-w-full bg-gradient-to-r from-cyan-500 to-blue-400'>
      <Router>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
