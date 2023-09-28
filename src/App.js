import React from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Form from "./components/Form";



function App() {
  return (
    <div style={{textAlign: 'center', fontFamily: "Times-New-Roman"}}>
    <Header />
    <div>
    <Button />
    </div>
    <Form />
    </div>
  );
}



export default App;
