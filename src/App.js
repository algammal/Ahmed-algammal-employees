import Addfile from "./components/Addfile/Addfile"
import Table from "./components/Table/Table"
import './App.css';
import { useState } from 'react'
import Papa from 'papaparse';

function App() {
  const [upload, uploadUpdate] = useState({});

  const dataChange = (event) => {
    let file = event.target.files[0]
    if (file instanceof Blob) {
      Papa.parse(file, {
        complete: function (results) {
          console.log("Finished:", results.data);
          uploadUpdate(results.data)

        }
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Employees
      </header>
      <div className='App-container'>
        <Addfile csvFile={dataChange} />
        <Table payload={upload} />
      </div>
    </div>
  );
}

export default App;
