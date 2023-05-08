import styles from './navbar.module.css'


export default function Navbar() {

    return(
        <nav>
        <div className={styles.menu}>
                <img src="/logo.png" width="70" height="70" 
                alt="logo" />
                <h1 className={styles.title}> Clinic Finder </h1>
        
        <ul className={styles.itens}>
                
                <li><a className={styles.nav1} href="login">Login</a></li>
                <li><a className={styles.nav2}href="sobre">Sobre</a></li>
                <li><a className={styles.nav3} href="cadastro">Cadastro</a></li>
         </ul>
         </div>
     </nav>
    )
}