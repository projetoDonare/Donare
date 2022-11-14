import styles from '../../Css/Voluntario_css/Voluntario.module.css'
import imagemvoluntario from '../../Images/img_voluntario1.png'
import VoluntarioPt2 from './voluntarioPt2'
import VoluntarioPt3 from './VoluntarioPt3'
function Voluntario() {
    return (
        <>
            <section className={styles.page1}>
                <div className={styles.txt}>
                    <h1>Existem muitas formas de ajudar o próximo</h1>
                    <h2>Veja como você pode se voluntariar</h2>
                </div>
                <div className={styles.container_imagem}>
                    <img src={imagemvoluntario} alt="" />
                </div>
            </section>

        </>
    );
};

export default Voluntario;