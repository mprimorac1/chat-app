import React, { useState } from "react";

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(text);
    setText("");
  };

  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus={true}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Input;
