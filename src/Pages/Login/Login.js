import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Modificado aqui
import LogoNvoip from '../../components/LogoNvoip';
import './login.css';

const Login = () => {
  const navigate = useNavigate();  // Modificado aqui

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [minhaCondicao, setMinhaCondicao] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <main>
      <section>
        <div className='logo-nvoip'>
          <LogoNvoip />
        </div>
        <div className='wrp-form'>
          <form onSubmit={handleSubmit}>
            <div className='input'>
              <input
                placeholder='Email'
                type='text'
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                required
              />
              <input
                placeholder='Senha'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password || ""}
                required
              />
            </div>
            {minhaCondicao ? (
              <div className='btn'>
                <Link to='/painel'>
                <button type='submit'>ENTRAR</button>
                </Link>
              </div>
            ) : (
              <button type='submit'>ENTRAR</button>
            )}
          </form>
          <div className='out'>
            <Link to='/register'>Não tem conta? Crie sua conta grátis!</Link>
            <Link to='/'>Esqueceu a senha?</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
