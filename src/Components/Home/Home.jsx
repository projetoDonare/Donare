import styles from '../../Css/Home-css/Home.module.css'
import HomePt2 from './HomePt2'
import HomePt3 from './HomePt3'
import HomePt4 from './HomePt4'


function Home(){
    return(
       <>
        <section className={styles.Home}>
            <div className={styles.txt}>
                <h1>Você sabia que 58,7% do Brasil possui insegurança alimentar?</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur reprehenderit commodi eveniet quod tempore eaque sequi dolore ea, molestiae explicabo deserunt amet ducimus. Fugiat itaque eius ullam. Maxime, dicta commodi.</p>
            </div>
        </section>
        <HomePt2 />
        <HomePt3 />
        <HomePt4 />
    
        
        </>
        
    )
}
export default Home