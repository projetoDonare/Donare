import styles from '../../Css/Home_css/HomePt3.module.css'
import graficoPrato from '../../Images/imagem_graficoPrato.png'


function HomePt3() {
  return (
    <section className={styles.Home}>
      <div className={styles.div1}>
        <img src={graficoPrato} alt="grafico em formato de prato" />
      </div>

      <div className={styles.div2}>
        <p>A insegurança</p>
        <p>alimentar em</p>
        <p>São Paulo</p>
      </div>
    </section>
  )
}
export default HomePt3;