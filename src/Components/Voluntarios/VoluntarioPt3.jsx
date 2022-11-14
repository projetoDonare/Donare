import styles from "../../Css/Voluntario_css/VoluntarioPt3.module.css"
import motorista1 from '../../Images/motorista1.png'
import onda_voluntario from '../../Images/onda_voluntario.png'

function VoluntarioPt3() {
    return (
        <section className={styles.page3}>

            <div className={styles.txt3}>
                <h1>Motorista voluntario</h1>
                <br />
                <p>Muitas ongs não possuem condições de ir buscar o alimento doado, pensando nisso nós desenvolvemos a possibilidade de você que possui veiculo poder ir buscar os alimentos doados </p>
            </div>

            <div className={styles.borda}></div>

            <div className={styles.motorista1}>
                <img src={motorista1} alt="" />
            </div>

            {/* <div className={styles.onda}>
                <img src={onda_voluntario} alt="" />
            </div> */}

        </section>
    )
}

export default VoluntarioPt3;