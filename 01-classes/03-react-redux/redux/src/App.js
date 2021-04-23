import './App.css';
import Card from "./components/card"
import Interval from "./components/interval"

function App() {
  return (
    <div className="app">
      <Interval />
      <div>
        <Card type="soma" />
        <Card type="media" />
        <Card type="random" />
      </div>
    </div>
  );
}

export default App;
