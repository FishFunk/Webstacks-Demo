import React from 'react'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.card}>
    <Img alt="" fluid={article.cardImage.fluid} />
    <h3 className={styles.previewTitle}>
      {article.color}
    </h3>
    <p>{article.info}</p>
  </div>
)
