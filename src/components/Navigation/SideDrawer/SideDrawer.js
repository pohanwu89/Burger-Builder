import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'


const SideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop
        show={props.open}
        clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
          <div
            style={{
              color: "#8F5C2C",
              textDecoration: "none",
              width: "100%",
              boxSizing: "border-box",
              display: "block"
            }}
            onClick={props.closed}
          >
            close
          </div>
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;
