import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './hero.module.css';

export default ({ data }) => (
  <div className={styles.hero}>
    <h2>I <span><FontAwesomeIcon icon={faHeart} color="white"/></span> Color</h2>
    <p className={styles.heroDetails}>
      Color really isn't that difficult to get right, if you know where to start.
      Learn by doing and you'll be a master in no time.
    </p>
    <button className={styles.heroButton}>Over to you</button>
  </div>
)
