import React from 'react';
import styles from './hero.module.css';

export default ({ data }) => (
  <div className={styles.hero}>
    <h2>{data.header}</h2>
    <p className={styles.heroDetails}>
      {data.details}
    </p>
      <button 
        className={styles.heroButton}
        onClick={()=>{window.location.href=data.button.link}}
        >{data.button.title || 'Click Me!'}
      </button>
  </div>
)

function onClick(){

}
