import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

import styles from "./menu.module.scss"

const Item = props => {
  return (
    <Link to="/" className={styles.item}>
      <FontAwesomeIcon icon={props.icon} size="lg" className={styles.icon} />
      {props.label}
    </Link>
  )
}

const Menu = () => {
  return (
    <div className={styles.container}>
      <Item label="トップ" icon={faHome} />
      <Item label="作品一覧" icon={faHome} />
      <Item label="仕事依頼" icon={faHome} />
      <Item label="お問い合わせ" icon={faHome} />
    </div>
  )
}

export default Menu
