import React from 'react'
import styles from './card.module.css'

import trash1 from '../../assets/trash1.png'
import trash2 from '../../assets/trash2.png'
import trash3 from '../../assets/trash3.png'
import trash4 from '../../assets/trash4.png'
import { useNavigate } from 'react-router'

const CollectorCard = ({name, collector_id}) => {

    const navigate = useNavigate();

    const images = [trash1, trash2, trash3, trash4];

    const image = images[(Math.random()*10)%4]

  return (
    <div className={styles.body} onClick={() => navigate(`/collector/${collector_id}`)}>
        <img className={styles.image} src={image} />
        <h5 className={styles.name}>{name}</h5>
    </div>
  )
}

export default CollectorCard