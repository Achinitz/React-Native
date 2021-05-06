import './App.css';
import React, { useState, FlatList } from 'react';

//function MeuBotao() {}
//var MeuBotao = function () {}

const MeuBotao = (props) => {   
  return (
    <div>
      <h4>{props.nome}</h4>
      <h4>{props.voto}</h4>  
      <button id='BotaoPrincipal' onClick={() => props.votar()}>
          Votar!
      </button>
    </div>
  );
}
 
export { MeuBotao };