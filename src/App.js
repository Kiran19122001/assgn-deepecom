import Main from "./Main";

import "./App.css";
const now = new Date();
const timeString = now.toLocaleTimeString();
function App() {
  return (
    <div className="App">
      <p className="time">{timeString}</p>
      <Main />
    </div>
  );
}

export default App;
