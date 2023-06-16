import React, { useState } from "react";

function MessageInput({ addMessage }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({ name, message });
    setName('');
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MessageInput;
