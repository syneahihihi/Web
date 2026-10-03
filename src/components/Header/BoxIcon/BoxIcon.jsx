import React from 'react'
import styles from '../styles.module.scss'
import fbIcon from '@icons/svgs/fblicon.svg'
import igIcon from '@icons/svgs/instaricon.svg'
import ytIcon from '@icons/svgs/ytbicon.svg'

const iconSources = {
  fb: fbIcon,
  ig: igIcon,
  yt: ytIcon,
}

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const handlRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ig':
        return igIcon;  
    case 'yt':
        return ytIcon;
      default:
        return null;
    }
  }
  return (
    <div className={boxIcon}>
      <a href={href}>
        <img src={handlRenderIcon(type)} alt={type} />
      </a>
    </div>
  )
}

export default BoxIcon
