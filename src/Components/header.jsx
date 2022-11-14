import { Link } from 'react-router-dom'
import styles from '../Css/Header.module.css'
import logo from '../Images/Logo.png'
function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li><Link to="/Projeto">Projeto</Link></li>
                    <li><Link to="/Instituicoes">Instituições</Link></li>
                    <li><Link to="/Voluntario">Voluntario</Link></li>
                    <li><Link to="/Apoiadores">Apoiadores</Link></li>
                    <li>Meu Perfil</li>
                </ul>
                {/* <Link><button className={styles.btn}>Doar</button></Link> */}
            </nav>
        </header>
    )
}

export default Header