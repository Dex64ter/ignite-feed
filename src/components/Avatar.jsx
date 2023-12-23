/* eslint-disable react/prop-types */
import styles from './Avatar.module.css';


export function Avatar({ hasBorder = true, src}) {
  return (

    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
  )
}