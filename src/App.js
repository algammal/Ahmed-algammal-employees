import Addfile from "./components/Addfile/Addfile"
import Table from "./components/Table/Table"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Employees
      </header>
      <div className='App-container'>
        <Addfile />
        <Table />
      </div>
    </div>
  );
}

export default App;
