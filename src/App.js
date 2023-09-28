import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './components/Button';
import Header from './components/Header';
import Form from "./components/Form";



function App() {
  return (
    <div style={{textAlign:"center", fontFamily: "times-new-roman"}}>
    <Header />
    <div>
    <Button />
    </div>
    <Form />
    </div>
  );
}



export default App;
