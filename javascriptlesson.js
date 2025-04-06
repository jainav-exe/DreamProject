import React, { useState } from "react";

const JavaScriptLesson = () => {
  const [code, setCode] = useState('console.log("Hello, JavaScript!");');
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const result = eval(code); // be careful with eval in real apps
      setOutput(String(result));
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎯 JavaScript Basics</h2>
      <p>Try running your own JavaScript code below:</p>
      <textarea
        rows="6"
        cols="60"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ fontFamily: "monospace", fontSize: "14px", marginBottom: "10px" }}
      />
      <br />
      <button onClick={runCode}>▶ Run Code</button>
      <h3>🧾 Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default JavaScriptLesson;
