import React from "react"

import Menu from "./menu"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main>{children}</main>
      <Menu />
    </div>
  )
}

export default Layout
