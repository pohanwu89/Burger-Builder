import React from 'react'
import Logo from '../Logo/Logo'
import styles from './ToolBar.module.css'
import NavigationItems from './NavigationItems/NavigationItems'
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle'

const ToolBar = (props) => {
  return (
    <header className={styles.ToolBar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default ToolBar
