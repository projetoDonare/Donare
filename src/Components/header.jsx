import { Link } from 'react-router-dom'
import styles from '../Css/Header.module.css'
import logo from '../Images/Logo.png'
function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <nav className={styles.menu}>
                 
                 <ul>
                    <li>Pagina principal</li>
                    <li>Apoiadores</li>
                    <li>Ong's</li>
                    <li>Doadores</li>
                    <li>Informativo</li>
                </ul>  
                <Link>
                    <button className={styles.btn}>Doar</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header