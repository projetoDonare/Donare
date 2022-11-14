import styles from "../../Css/Voluntario_css/VoluntarioPt2.module.css"
import motorista1 from '../../Images/motorista1.png'

function VoluntarioPt2() {
    return (
        <section className={styles.page2}>
            <div className={styles.motorista1}>
                <img src={motorista1} alt="" />
            </div>
            <div className={styles.txt2}>
                <h1>Como ser voluntario</h1>
                <br />
                <p>Muitas ongs não possuem condições de ir buscar o alimento doado, pensando nisso nós desenvolvemos a possibilidade de você que possui veiculo poder ir buscar os alimentos doados </p>
            </div>
        </section>
    )
}

export default VoluntarioPt2;