import React, { useState } from "react";
import './App.css';
import Card from "./components/Card";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  }

  return (
    <div className="App">
      <h1>Thank You, Chris!</h1>
      <Card messages={messages} addMessage={addMessage} />
    </div>
  );
}

export default App;
