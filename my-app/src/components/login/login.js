import styles from './login.module.css'



 export default function Login(props) {
   
    return (
        <div className={styles.login}>
            <img className={styles.globo} src="/planeta.gif " />
            <h1 className={styles.entrar}> Faça seu login</h1>
            <div className={styles.input}>
                <label for="Email"> Digite seu Email</label>  <br></br>
                <input type="email" id="Email" placeholder="seuemail@email.com" className="w-100" required />
            </div>
            <div className={styles.input}>
                {props.input2}
                <label for="senha"></label>Digite sua Senha<br></br>
                <input type="password" id="senha" placeholder="*********" maxLength="8" required />
                <span className={styles.span}></span>

            </div>
            <div className={styles.lembrar}>
    
                <input type="checkbox" name="dados" />
                <label for="dados"></label> Lembrar meus dados <br></br>

                <a href="recupSenha.html" >Esqueceu usuário ou senha?</a>

                <div className={styles.login}>
                    <a href="Atividades.html">
                        <button className={styles.button} >Entrar</button>
                    </a>
                    <a href="cadastro.html">
                        <button className={styles.button}>Cadastrar</button>
                    </a>
                </div>
            </div>
        </div>

    )
}