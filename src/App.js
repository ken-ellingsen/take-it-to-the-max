import React, { useState } from "react";
import "./styles.css";

export default function App() {

  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const maxLength = 60;

  return (
    <div className="App">
      <div className="status-update">
        <h1>Super Short Status!</h1>
        <p>Tell us how you are doing in 60 characters or less!</p>
        <form>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="What's good?"
          />
          <button 
            type="submit" 
            disabled={message.length > maxLength}
          >
            Tell the world!
          </button>
        </form>
      </div>
    </div>
  );
}
