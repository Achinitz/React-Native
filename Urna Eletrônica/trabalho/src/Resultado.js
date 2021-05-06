function retornaNomeVencedor(vetor)
{
    if(vetor[0].voto > vetor[1].voto && vetor[0].voto > vetor[2].voto){
        return <div>O vencedor foi: {vetor[0].nome}</div>
    }else if (vetor[1].voto > vetor[0].voto && vetor[1].voto > vetor[2].voto){
        return <div>O vencedor foi: {vetor[1].nome}</div>
    }else if (vetor[2].voto > vetor[0].voto && vetor[2].voto > vetor[1].voto){
        return <div>O vencedor foi: {vetor[2].nome}</div>
    }else {
        return <div>Ocorreu um empate entre os candidatos.</div>
    }
}

function retornaRanking(vetor){
    return(
    <div>   
    <div>{vetor[0].nome} : {vetor[0].voto}</div>
    <div>{vetor[1].nome} : {vetor[1].voto}</div>
    <div>{vetor[2].nome} : {vetor[2].voto}</div>
    </div>
     )
}

function ExibeResultado({props})
{
return(
    <div id="Resultado">   
    <div id="retornaRanking">
      <h3> {retornaRanking(props)} </h3>
    </div>
    <div>    
       <h2>{retornaNomeVencedor(props)} </h2>
    </div>
    </div>
      )
}

export { ExibeResultado };
