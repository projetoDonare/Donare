import styles from '../../Css/Apoiadores_css/ApoiadoresPt3.module.css'
import { Link } from 'react-router-dom'

function ApoiadoresPt3(){
    return(
        <>
            <section className={styles.ApoiadoresPt3}>
                <p>
                Seja também um apoiador dessa causa
                </p>
                <Link>APOIAR</Link>
            </section>
        </>
    );
};

export default ApoiadoresPt3;