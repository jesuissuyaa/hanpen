import React, { useState } from "react"
import styles from "./slider.module.scss"

const urls = [
  "https://66.media.tumblr.com/e84772508149d813baeb5630fd7a8e49/7ea6766c49f987b2-3e/s500x750/a2c1c75853dce8cc68db98a0d01ffa983a8e2676.png",
  "https://66.media.tumblr.com/6344a757d281a01b0fb27c17c34840ce/7ea6766c49f987b2-b0/s500x750/758fc8029d1e7d6c22342086723f0877944a2d11.jpg",
  "https://66.media.tumblr.com/bf468fe85395db283064df9e662e97fb/941a412934403034-27/s500x750/dbff4a3fe22725ca3092b5da42962aae208a9965.png",
]

const slideWidth = `10`
const Slider = () => {
  const [index, setIndex] = useState(0)
  console.log(index)

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.toggle}
        onClick={() => setIndex(Math.max(0, index - 1))}
      >
        L
      </div>

      <div
        className={styles.slideContainer}
        style={{
          transform: `translateX(${slideWidth * index * -1}rem)`,
          transition: `transform 1s`,
        }}
      >
        {urls.map(url => (
          <img src={url} />
        ))}
      </div>
      <div
        className={styles.toggle}
        onClick={() => setIndex(Math.min(urls.length - 1, index + 1))}
      >
        R
      </div>
      <div className={styles.previewContainer}></div>
    </div>
  )
}

export default Slider
