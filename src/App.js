import React, { useState } from "react";
import "./styles.css";

const [message, setMessage] = useState("");
const [showSuccess, setShowSuccess] = useState(false);
const maxLength = 60;

const updateMessage = (e) => setMessage(e.target.value);

export default function App() {
  return (
    <div className="App">
      <div className="status-update">
        <h1>Super Short Status!</h1>
        <p>Tell us how you are doing in 60 characters or less!</p>
        <form>
          <textarea placeholder={message} onChange={updateMessage} />
          <button type="submit">Tell the world!</button>
        </form>
      </div>
    </div>
  );
}
