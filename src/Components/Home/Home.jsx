import styles from '../../Css/Home-css/Home.module.css'
import HomePt2 from './HomePt2'
import HomePt3 from './HomePt3'
import HomePt4 from './HomePt4'
import HomePt5 from './HomePt5'
import HomePt6 from './HomePt6'
import HomePt7 from './HomePt7'
import HomePt8 from './HomePt8'
import pratoPrincipal from '../../Images/PratoPrincipal.png'
function Home(){
    return(
       <>
        <section className={styles.Home}>
<div className={styles.txt}>
    <h1>Você sabia que 58,7% do Brasil possue insegurança alimentar?</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur reprehenderit commodi eveniet quod tempore eaque sequi dolore ea, molestiae explicabo deserunt amet ducimus. Fugiat itaque eius ullam. Maxime, dicta commodi.</p>
</div>
        </section>
        <HomePt2 />
        <HomePt3 />
        <HomePt4 />
        <HomePt5 />
        <HomePt6 />
        <HomePt7 />
        <HomePt8/>
        
        </>
        
    )
}
export default Home