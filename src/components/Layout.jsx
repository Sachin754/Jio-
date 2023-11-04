import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.scss' 
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main className={styles.mainBody}>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout