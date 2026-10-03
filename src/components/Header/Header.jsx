import styles from './styles.module.scss'
import BoxIcon from './BoxIcon/BoxIcon.jsx'
import { dataBoxIcon ,dataMenu} from './constants.jsx'
import Menu from './Menu/Menu.jsx'
import Logo from '@icons/images/logo.svg.webp'
import Hearticon from '@icons/svgs/hearticon.svg'
import Reloadicon from '@icons/svgs/realoadicon.svg'
import Carticon from '@icons/svgs/carticon.svg'

function MyHeader() {
  return (
    <div className={styles.container}>
    <div className={styles.containerHeader}>
      <div className={styles.containerBox}>
        <div className={styles.containerBoxIcon}>
          {dataBoxIcon.map((item) => (
            <BoxIcon key={item.type} type={item.type} href={item.href} />
          ))}
        </div>
        <div className={styles.containerMenu}>
          {dataMenu.slice(0, 3).map((item) => (
            <Menu key={item.content} content={item.content} href={item.href} />
          ))}
        </div>
      </div>

      <div>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '153px',
            height: '53px',
          }}
        />
      </div>

      <div className={styles.containerBox}>
        <div className={styles.containerMenu}>
          {dataMenu.slice(3, 6).map((item) => (
            <Menu key={item.content} content={item.content} href={item.href} />
          ))}
        </div>

        <div className={styles.containerBoxIcon}>
          <img width="26" height="26" src={Hearticon} alt="Heart" />
          <img width="26" height="26" src={Reloadicon} alt="Reload" />
          <img width="26" height="26" src={Carticon} alt="Cart" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default MyHeader