import styles from './login.module.css'



 export default function Login(props) {
    console.log(props.categoria)
    return (
        <div className={styles.login}>
            <img className={styles.globo} src="/planeta.gif " />
            <h1 className={styles.entrar}>
                {props.categoria}</h1>
            <div className={styles.input}>
                {props.input}
                <label for="Email"></label> <br></br>
                <input type="email" id="Email" placeholder="seuemail@email.com" className="w-100" required />
            </div>
            <div className={styles.input}>
                {props.input2}
                <label for="senha"></label> <br></br>
                <input type="password" id="senha" placeholder="*********" maxLength="8" required />
                <span className={styles.span}></span>

            </div>
            <div className={styles.lembrar}>
                {props.lembrar}
                <input type="checkbox" name="dados" />
                <label for="dados"></label> <br></br>

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