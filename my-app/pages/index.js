import Head from 'next/head'
import Login from '../src/components/login/login'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet"/>
      </Head>
      <main>
         
           <Login
          categoria="Faça seu login!"
          input="Digite seu E-mail"
          input2="Digite sua senha"
          lembrar="Lembrar meus dados"
          esqueceu="Esqueceu usuário ou senha?"
         />
        

    
       
      </main>

            </div>
            )
}
