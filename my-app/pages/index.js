import Head from 'next/head'
import Login from '../src/components/login/login'
import Layout from '../components/Layout'


export default function Login() {
  return (
    <div >

     
        <Navbar/>
     
      <main>
         
           <Login
          categoria="Faça seu login!"
          input="Digite seu E-mail"
          input2="Digite sua senha"
          lembrar="Lembrar meus dados"
          esqueceu="Esqueceu usuário ou senha?"
         />
        

    
       <Footer/>
      </main>

            </div>
            )
}
