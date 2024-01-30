import React, { useEffect, useState } from 'react'
import './painel.css'
import LogoNvoip from '../../components/LogoNvoip';



const Painel = () => {

  const [nome, setNome] = useState("Renan")
  const [number, setNumber] = useState(" 5532988106612")

  return (
    <div>
        <main>
            <section>
                <div className='logo-nvoipp-register'>
                    <LogoNvoip />
                </div>
              <div className='list'>
                <div className='content'>
                  <h2>Nome: {nome}</h2>
                  <h2>Numero: {number}</h2>
                </div>
                <div className='content'>
                  <h2>Nome: {nome}</h2>
                  <h2>Numero: {number}</h2>
                </div>
                <div className='content'>
                  <h2>Nome: {nome}</h2>
                  <h2>Numero: {number}</h2>
                </div>
                <div className='content'>
                  <h2>Nome: {nome}</h2>
                  <h2>Numero: {number}</h2>
                </div>
              </div>
                  
            
            </section>
        </main>
    </div>
  )
}

export default Painel