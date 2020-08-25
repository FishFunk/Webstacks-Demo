import React from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './hero.module.css';

export default ({ data }) => (
  <div className={styles.hero}>
    <h2>I <span><FontAwesomeIcon icon={faHeart} color="white"/></span> Color</h2>
    {/* <h3 className={styles.heroHeadline}>{data.name}</h3>
    <p className={styles.heroTitle}>{data.title}</p>
    <p>{data.shortBio.shortBio}</p> */}
    <p>Color really isn't that difficult to get right, if you know where to start. <br/> 
      Learn by doing and you'll be a master in no time.
    </p>
    <button className={styles.heroButton}>Over to you</button>
  </div>
)
