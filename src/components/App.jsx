import React from "react";
import Form from "./Form";

var userIsRegistered = <tr></tr>;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
