import './Table.css'
import Items from '../Tableitems/Tableitems'
import { useEffect, useState } from 'react';

const Table = (props) => {
    const [empWorkedTogether, empWorkedTogetherUpdate] = useState([]);
    const [maxWorked, maxWorkedUpdate] = useState([]);
    useEffect(() => {
        const data = props.payload
        const overlap = (e1d1, e1d2, e2d1, e2d2) => {

            const startDate1 = new Date(e1d1);
            const endDate1 = e1d2 === 'null' ? new Date() : new Date(e1d2);
            const startDate2 = new Date(e2d1);
            const endDate2 = e2d2 === 'null' ? new Date() : new Date(e2d2);

            const start = startDate1 < startDate2 ? startDate2 : startDate1;
            const end = endDate1 < endDate2 ? endDate1 : endDate2;

            if (end >= start) {
                const diffTime = Math.abs(end - start);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays;
            }

            return 0;
        };

        const result = data.reduce((acc, el) => {
            let c = acc[el[1]];
            if (!c) {
                c = acc[el[1]] = {
                    overlap: 0,
                    e1: 0,
                    e2: 0,
                    data: []
                };
            };
            c.data.forEach(d => {
                const o = overlap(d[2], d[3], el[2], el[3]);
                if (o > c.overlap) {
                    c.overlap = o;
                    c.e1 = d[0];
                    c.e2 = el[0];
                }
            });

            c.data.push(el);
            return acc;

        }, {});

        const deObjectify = Object.entries(result).map(([projectId, { e1, e2, overlap }]) => ({ e1, e2, projectId, overlap }));
        if (deObjectify.length !== 0) {
            const maxworked = deObjectify?.reduce(function (prev, current) {
                return (prev.overlap > current.overlap) ? prev : current
            })
            maxWorkedUpdate(maxworked)
        }
        empWorkedTogetherUpdate(deObjectify)
    }, [props.payload]);
    return (
        <div className='tableContainer'>
            <div className='tableHeader'>
                <div className='item'>Employee ID 1</div>
                <div className='item'>Employee ID 2</div>
                <div className='item'>Project ID</div>
                <div className='item'>Days worked</div>
            </div>
            <Items maxWorked={maxWorked} empWorkedTogether={empWorkedTogether} />
        </div>
    )
}

export default Table