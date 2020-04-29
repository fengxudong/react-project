import React from 'react';
import './App.css';
import MyRouter from "./components/common/MyRouter";
import router from "./router"

function App() {
  return (
    <div className="App">
      
          <MyRouter router={router}></MyRouter>
    </div>
  );
}

export default App;
