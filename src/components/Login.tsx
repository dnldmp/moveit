import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client'

const Login: NextPage = () => {
    const [ session, loading ] = useSession()
    if(session) {
      return <button onClick={() => signOut()}>Sign out</button>
    }
    return <button onClick={() => signIn('github')}>Sign in</button>
}

export default Login;