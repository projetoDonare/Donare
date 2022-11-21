import styles from '../../Css/Instituicoes/InstituicoesPt2.module.css'
import Carousel from 'react-bootstrap/Carousel';

function InstituicoesPt2() {
  return (
  <section className={styles.pagina}>
    <div className={styles.txt}>
    <h1 >Conheça as Instituições que fazem parte desse projeto</h1>
    </div>
 <div>
 <Carousel>
      <Carousel.Item>
      
        <div className={styles.Carousel}>
            oi
        </div>
      
      </Carousel.Item>
      <Carousel.Item>
       <div className={styles.Carousel}>
        ola
       </div>
       
      </Carousel.Item>
      <Carousel.Item>
       <div className={styles.Carousel}>
        olares
       </div>

      
      </Carousel.Item>
    </Carousel>
 </div>
  </section>
    );
}

export default InstituicoesPt2;