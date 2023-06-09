import React from 'react'
import styles from './grid.module.css';

import { useSelector } from 'react-redux'
import CollectorCard from '../card/CollectorCard';



const CollectorGrid = () => {

    // const collectors = useSelector((state) => state.getCollectors.collectors);
    const collectors = [{collector_id: 2, name: 'Blanco'},{collector_id: 23, name: 'Atem'},{collector_id: 1, name: 'Trowy'}]
    return (
        <div className={styles.grid}>
            {
                collectors.map((col) => {
                    return (<CollectorCard key={col.collector_id} collector_id={col.collector_id} name={col.name} />)
                })
            }
        </div>
    )
}

export default CollectorGrid