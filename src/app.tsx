import React from "react";

function liveDangerously(x: number | null) {
  // No error
  console.log(x!.toFixed());
}

liveDangerously(null)

function App() {
  return <div className="app" style={{display: "grid", gap: "10px"}}></div>;
}
export default App;
