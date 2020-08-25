import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <header className={styles.header}>
    <FontAwesomeIcon className={styles.logo} icon={faRocket} size="2x"/>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#">Blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#">Red</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#">Blue</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#">Green</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#">Pink</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#">Purple</Link>
        </li>
      </ul>
    </nav>
  </header>
)
