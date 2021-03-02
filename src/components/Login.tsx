import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client'

const Login: NextPage = () => {
    const [ session, loading ] = useSession()
    if(session) {
      return <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    }
    return <>
      Not signed in <br/>
      <button onClick={() => signIn('auth0')}>Sign in</button>
    </>
}

export default Login;