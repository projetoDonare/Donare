import styles from '../../Css/Instituicoes/Instituicoes.module.css'
import Instituicoespt2 from './Instituicoespt2'
import InstituicoesPt3 from './Instituicoespt3'

function Instituicoes() {
    return (
        <>
            <section className={styles.Header_invisivel}></section>
            <section className={styles.InstituicoesPt1}>
                <h1>Você pode encher esse prato</h1>
                <p>Conheça as Ongs e Igrejas que lutam contra a fome que mata milhares de brasileiros</p>
            </section>
            <Instituicoespt2 />
            <InstituicoesPt3 />
        </>
    )
}
export default Instituicoes