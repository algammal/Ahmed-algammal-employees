import './Addfile.css'

const Addfile = (props) => {
    return (
        <div className="buttonContainer">
            <label htmlFor="csv">Import "CSV" file</label>
            <input type="file"
                id="csv" name="csv"
                accept="CSV, XLSX"
                onChange={props.csvFile}
            >
            </input>
        </div>
    )
}
export default Addfile