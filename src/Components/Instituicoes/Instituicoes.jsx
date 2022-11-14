import styles from '../../Css/Instituicoes/Instituicoes.module.css'
import InstituicoesPt2 from './InstituicoesPt2'

function Instituicoes(){
    return(
   <>
        <section className={styles.instituicoes}>
<div className={styles.txt}>
<h1>Você pode encher esse prato</h1>
<p>
Conheça as Ongs e Igrejas que lutam contra a fome que mata milhares de brasileiros
</p>
</div>
        </section>
        <InstituicoesPt2 />
   </>
    )
}
export default Instituicoes