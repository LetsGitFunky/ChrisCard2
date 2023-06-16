import React from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

function Card({ messages, addMessage }) {
  return (
    <div className="Card">
      <MessageInput addMessage={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
}

export default Card;
