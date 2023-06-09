import React from 'react'
import { useSelector } from 'react-redux'

import styles from './loader.module.css';
import Loading from '../../assets/icons/Loading.icon';

const Loader = () => {
   const loading = useSelector((state) => state.getLoader.loading);

  return (
    <div className={`${styles.body} ${loading? styles.show : styles.hide}`}>
        <Loading />
    </div>
  )
}

export default Loader