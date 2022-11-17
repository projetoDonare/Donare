import styles from '../../Css/Projeto_css/Projeto.module.css'
import ProjetoPt2 from './ProjetoPt2'

function Projeto(){
    return(
        <>
        
        <section className={styles.Projeto}>
         <div className={styles.txt}>
         <h1>O Projeto Donare</h1>
            <br />
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quis debitis facilis explicabo vero aspernatur vel voluptatibus quo, magni nulla voluptatum rem necessitatibus, doloribus obcaecati sapiente illum corporis id consequuntur.</p>
         </div>
        </section>
        <ProjetoPt2 />
        </>
    )
}
export default Projeto;