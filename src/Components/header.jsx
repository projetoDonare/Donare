import styles from '../Css/Header.module.css'
import logo from '../Images/Logo.png'
function Header(){
    return(
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li>ola</li>
                    <li>ola</li>
                    <li>ola</li>
                    <li>ola</li>
                    <li>ola</li>
                </ul>
             </nav>
        </header>
    )
}

export default Header