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
                    <li><Link to="/">Pagina principal</Link></li>
                    <li><Link to="/Voluntariado">Voluntariado</Link></li>
                    <li><Link to="/instituições">Instituições</Link></li>
                    <li><Link to="/Doadores">Doadores</Link></li>
                    <li><Link to="/Informativo">Informativo</Link></li>
                </ul>
                <Link>
                    <button className={styles.btn}>Doar</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header