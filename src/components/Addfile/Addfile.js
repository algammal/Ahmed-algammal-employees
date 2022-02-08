import './Addfile.css'

const Addfile = (props) => {
    return (
        <div className="buttonContainer">
            <div>
                <label htmlFor="csv">Import "CSV" file</label>
                <input type="file"
                    id="csv" name="csv"
                    accept="CSV, XLSX"
                    onChange={props.csvFile}
                >
                </input>
            </div>
            <div className='note'>
                Note: Row for pairs worked as a team longest is highlighted in blue
            </div>
        </div>
    )
}
export default Addfile