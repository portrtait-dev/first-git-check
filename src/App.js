import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Pulled it from Git, now pushing back</h3>
        {/* git pull origin master */}

        <h3>Selamlar - create new branch as well </h3>
      </header>
    </div>
  );
}

export default App;
