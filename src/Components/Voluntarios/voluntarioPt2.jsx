import styles from "../../Css/Voluntario_css/VoluntarioPt2.module.css"
import motorista1 from '../../Images/motorista1.png'

function VoluntarioPt2() {
    return(
        <section>
            <div className={styles.motorista1}>
                <img src={motorista1} alt="" />
            </div>
        </section>
    )
}

export default VoluntarioPt2;