import styles from '../../Css/Home-css/Home.module.css'
import HomePt2 from './HomePt2'
import HomePt3 from './HomePt3'
import HomePt4 from './HomePt4'
import HomePt5 from './HomePt5'
import HomePt6 from './HomePt6'
import HomePt7 from './HomePt7'
import HomePt8 from './HomePt8'
function Home(){
    return(
       <>
        <section className={styles.Home}>
        <div className={styles.txt}>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic quidem praesentium, eos repellat officia tenetur </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat molestiae sequi iste maiores tempore ullam! Nobis obcaecati veritatis, non ducimus maxime minus ex, neque deserunt illo placeat in qui cum!</p>
        </div>
        <div className={styles.laranja}>
            laranja
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