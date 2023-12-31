import AppNav from "./AppNav"
import Logo from "./Logo"
import styles from './SideBar.module.css'


function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>


            <p>List of cities</p>
            <footer className={styles.footer}>
                <p className={styles.copyright}> &copy; Copyright {new Date().getFullYear()} by Prabhat Shukla Ltd.</p>
            </footer>
        </div>
    )
}

export default Sidebar
