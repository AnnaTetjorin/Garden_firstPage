import styles from './form.module.css'
import five from '../../media/fiveHands.svg'

function Form() {
    return (
      <div className={styles.greenDiv}>
       <h2>5% off on the first order</h2>
       <form>
        <img className={styles.fiveHands} src={five} alt="five hands"/>
        <div className={styles.divInputs}>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Phone number"/>
            <input type="text" placeholder="Email"/>
            <button className={styles.whiteButton} >Get a discount</button>
        </div> 
        </form>
      </div>
    );
  }
  
  export default Form;
  