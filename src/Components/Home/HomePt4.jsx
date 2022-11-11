import styles from '../../Css/Home-css/HomePt4.module.css'
import sejaVoluntario from '../../Images/imagem_sejaVoluntario.png'
import SejaDoador from '../../Images/image_sejaDoador.png'


function HomePt4() {
    return (
        <section className={styles.Home}>
            <div className={styles.div_imagem}>
                <img src={sejaVoluntario} alt="" />
            </div>
            <div className={styles.div_imagem}>
                <img src={SejaDoador} alt="" />
            </div>
        </section>
    )
}
export default HomePt4