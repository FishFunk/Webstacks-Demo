import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/red/">Red</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blue/">Blue</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/green/">Green</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/pink/">Pink</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/purple/">Purple</Link>
      </li>
    </ul>
  </nav>
)
