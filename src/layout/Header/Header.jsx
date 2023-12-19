import iconBild from '../../media/icon.svg'
import logo from '../../media/logo.svg'
import styles from './header.module.css'



function Header() {
    return (
        <>
        <div className={styles.divHeader}>
        <nav>  
        <img className={styles.logo} src= { logo }/>
          <ul>
            <li>Main Page</li>
            <li>Categories</li>
            <li>All products</li>
            <li>All sales</li>
          </ul>
        <img className={styles.iconBild} src= { iconBild }/>
        </nav>
        </div>
       
       
       
       </>
    );
  }
  
  export default Header;