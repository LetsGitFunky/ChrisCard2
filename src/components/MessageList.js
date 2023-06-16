import React from "react";

function MessageList({ messages }) {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>"{message.message}"
        <br></br>
        - {message.name} </li>
      ))}
    </ul>
  );
}

export default MessageList;
