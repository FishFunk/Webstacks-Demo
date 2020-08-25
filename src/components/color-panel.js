import React from 'react'
import Img from 'gatsby-image'

import styles from './color-panel.module.css'

export default ({ card }) => (
  <div className={styles.card}>
    <Img alt="" fluid={card.cardImage.fluid} />
    <h3 className={styles.previewTitle}>
      {card.color}
    </h3>
    <p>{card.info}</p>
  </div>
)
