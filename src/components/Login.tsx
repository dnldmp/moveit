import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/components/Login.module.css'

const Login: NextPage = () => {
    const [ session, loading ] = useSession()
    if(!session) {
      return (
        <div className={styles.loginContainer}>
          <main>
            <div>
              <img src="big-logo.svg" alt="logo"/>
            </div>
            <div>
              <img src="/icons/write-logo.svg" alt="write logo"/>
              <p>Bem-vindo</p>
              <div>
                  <img src="/icons/github.svg" alt="github"/>
                <p>
                  Faça login com seu Github para começar
                </p>
              </div>
              <button onClick={() => signIn('github')}>Entrar</button> 
            </div>
          </main>
        </div>
      )
    }
    return <button onClick={() => signOut()}>Sign out</button>
}

export default Login;