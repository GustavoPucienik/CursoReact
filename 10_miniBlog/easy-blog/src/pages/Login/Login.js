import styles from './Login.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';

import {useState, useEffect} from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {login, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
     e.preventDefault();

     setError("")

     const user = {
        email,
        password
     }

     const res = await login(user);

     console.log(res);
  }

  useEffect(() => {

     if (authError) {
        setError(authError)
     }

  }, [authError])

  return (
    <div className={styles.login}>
    <h1>Login</h1>
    <p>Entre para postar.</p>
    <form onSubmit={handleSubmit}>
       <label>
          <span>Email:</span>
          <input type="email" name='email' required placeholder='Email do usuário'
           value={email} onChange={(e) => setEmail(e.target.value)} />
       </label>
       <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='Coloque sua senha'
           value={password} onChange={(e) => setPassword(e.target.value)} />
       </label>
       {!loading && <button type="submit" className='btn'>Entrar</button>}
       {loading && <button type="submit" className='btn' disabled>Aguardando</button>}
       {error && <p className='error'>{error}</p>}
    </form>
    </div>
  )
}

export default Login