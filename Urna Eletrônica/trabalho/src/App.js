import './App.css';
import React, { useState, FlatList } from 'react';
import { MeuBotao } from './MeuBotao';
import { ExibeResultado } from './Resultado';

function App() {
  const [aberto, setAberto] = useState(true)
  const [candidatos, setCandidatos] = useState([
    {nome : 'Marty MCFly', voto: 0},
    {nome : 'Doc', voto: 0},
    {nome : 'Biff Tanen', voto: 0}
  ]);

  if (aberto && candidatos[2].voto < 6 && candidatos[1].voto < 6 && candidatos[0].voto < 6) {
    return (
      <div id="Tela">    
        <div className='SubTela'>
          <MeuBotao 
            nome={candidatos[0].nome} 
            voto={candidatos[0].voto}
            votar={() => {
              setCandidatos([
                { ...candidatos[0], voto: candidatos[0].voto + 1 },
                { ...candidatos[1] },
                { ...candidatos[2] },
              ])
            }}
          />
        </div>

        <div className='SubTela'>
          <MeuBotao 
            nome={candidatos[1].nome} 
            voto={candidatos[1].voto}
            votar={() => {
              setCandidatos([
                { ...candidatos[0] },
                { nome: candidatos[1].nome, voto: candidatos[1].voto + 1 },
                { ...candidatos[2] },
              ])
            }}
          />
        </div>

        <div className='SubTela'>
          <MeuBotao
            nome={candidatos[2].nome} 
            voto={candidatos[2].voto}
            votar={() => {
              setCandidatos([
                { ...candidatos[0] },
                { ...candidatos[1] },
                { nome: candidatos[2].nome, voto: candidatos[2].voto + 1 },
              ])
            }}
          />
        </div>
      
      <div id="BotaoFinalizar">
       <button onClick={() => setAberto(false)}>
         Fechar Votação!
       </button>
      </div>
      </div>   
    );

  } else {
    return( 
   <ExibeResultado props={candidatos}/>
    )
  }
}

export default App;
