import React from 'react'
import styles from './grid.module.css';

import { useSelector } from 'react-redux'
import CollectorCard from '../card/CollectorCard';



const CollectorGrid = () => {

    const collectors = useSelector((state) => state.getCollectors.collectors);

    return (
        <div className={styles.grid}>
            {
                collectors.map((col) => {
                    return (<CollectorCard key={col.collector_id} collector_id={col.collector_id} name={col.user.name} />)
                })
            }
        </div>
    )
}

export default CollectorGrid