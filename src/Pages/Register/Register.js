import { useEffect, useState } from 'react';
import LogoNvoip from '../../components/LogoNvoip';
import "./register.css"
import axios, { Axios } from 'axios';



const Register = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("")
  const API = "http://localhost:3000"
  const valid = password === passwordConfirmed ? true : false
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todos = {
      id: (Math.random() * 100).toFixed(2),
      nome,
      email,
      telefone,
      password
    };

    await fetch(API + "/user/", {
      method: "POST",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type" : "application/json"
      }
    }

    )

    console.log("enviou ", todos);

    setEmail("");
    setNome("");
    setPassword("");
    setPasswordConfirmed(""); // Corrigido aqui
    setTelefone("");
  };

  
  return (
    <main>
      <section>
        <div className='ogo-nvoip'>
          <LogoNvoip />
        </div>

        <div className='description'>
          <h2>Você está a 2 minutos</h2>
          <p>de revolucionar o atendimento de sua empresa.</p>
          <label>Preencha os campos abaixo ou entre pelo <a href='#'>LinkedIn</a></label>

        </div>
        <div className='wrp-form'>
          <form onSubmit={handleSubmit}>
            <div className='input-register'>
              <input placeholder='Nome' type='text' onChange={(e) => setNome(e.target.value)} value={nome || ""} required />
              <input placeholder='E-mail' type='text' onChange={(e) => setEmail(e.target.value)} value={email || ""} required />
              <input placeholder='Telefone' type='text' onChange={(e) => setTelefone(e.target.value)} value={telefone || ""} required />
              <input placeholder='Senha' type='password' onChange={(e) => setPassword(e.target.value)} value={password || ""} required />
              <input placeholder='Confirme a senha' type='password' onChange={(e) => setPasswordConfirmed(e.target.value)} value={passwordConfirmed || ""} required />
            </div>

            {valid ? (
              <div className='btn'>
                <button type='submit'>CADASTRAR</button>
              </div>
            ) : (
              <>
                <button className='not-btn' disabled>CADASTRAR</button>
                <p className='not-pass'>Senha não bate</p>
              </>
            )}

          </form>
          <div className='out'>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Register