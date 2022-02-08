const Items = (props) => {
    return (
        <div >
            {
                props.empWorkedTogether.length !== 0 ? props.empWorkedTogether?.map((element, index) => {
                    return (
                        <div className={props.maxWorked.overlap === element.overlap ? 'tableItems maxEmp' : 'tableItems'} key={index}>
                            <div className='item'>{element.e1}</div>
                            <div className='item'>{element.e2}</div>
                            <div className='item'>{element.projectId}</div>
                            <div className='item'>{element.overlap}</div>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}
export default Items;