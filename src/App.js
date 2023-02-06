import './App.css';
import Greeting, { GreetingNextLevel } from './components/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is props</h1>
        <Greeting firstName = "Varlince" emoji = "👋🏽 "/>
        <GreetingNextLevel lastName="Meran" arrow="------->"/>
      </header>
    </div>
  );
}

export default App;
