import './Addfile.css'
//import papa from 'papaparse';
//import { useState } from 'react'

const Addfile = () => {
    //const [upload, uploadUpdate] = useState('');
    //var data = Papa.parse(csv);

    function changeload(event) {
        console.log(event)
    }
    return (
        <div className="buttonContainer">
            <label htmlFor="csv">Import "CSV" file</label>
            <input type="file"
                id="csv" name="csv"
                accept="CSV, XLSX"
                onChange={changeload}
            >
            </input>
        </div>
    )
}
export default Addfile