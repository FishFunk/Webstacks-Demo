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
          <Link to="/blog/">Blog</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/red/">Red</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/blue/">Blue</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/green/">Green</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/pink/">Pink</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/purple/">Purple</Link>
        </li>
      </ul>
    </nav>
  </header>
)
