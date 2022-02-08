import './Table.css'
import Items from '../Tableitems/Tableitems'

const Table = (props) => {
    return (
        <div className='tableContainer'>
            <div className='tableHeader'>
                <div className='item'>Employee ID 1</div>
                <div className='item'>Employee ID 2</div>
                <div className='item'>Project ID</div>
                <div className='item'>Days worked</div>
            </div>
            <Items payloadData={props.payload} />
        </div>
    )
}

export default Table