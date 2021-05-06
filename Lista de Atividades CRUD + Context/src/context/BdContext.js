import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React,{ createContext, useReducer, useState } from "react";

const BdContext = createContext();

    const counterReducer = (state, action) => {
        switch(action.type){
            case 'add':
                var tarefas = state.tarefa;
                var ultimoId = 0;
                tarefas.forEach(element => {
                   if(element != null){
                    ultimoId = element.Id + 1;
                   }
                });
                action.payload.Id = ultimoId;
                tarefas.push(action.payload);
                return ({...state, tarefa: tarefas });
            case 'remove':
                let tarefass = state.tarefa;
                let objeto = action.payload;
                const tarefasFiltradas = tarefass.filter(t => {
                return(t.Id !== objeto.Id);
                })
                return { ...state, tarefa: tarefasFiltradas }
            case 'edit':
                var tarefas = state.tarefa;
                var novoObj = action.payload;
                tarefas.forEach(element => {
                    if(element.Id == novoObj.Id){
                        element.Titulo = novoObj.Titulo;
                        element.Descricao = novoObj.Descricao;
                    }
                 });
                return({...state, tarefa: tarefas});
            default:
                return({...state});
    }
}


const BdProvider = ({ children }) => 
{
    const [state,dispatch] = useReducer(counterReducer, {tarefa: []});
    const [objeto,setObjeto] = useState({Id:0,Titulo:"Padrão",Descricao:"Padrão"});

    const add = (t) => {
        dispatch({type: 'add',payload: t});
    }

    const del = (r) => {
        dispatch({type: 'remove',payload: r});
    }

    const update = (e) => {
        dispatch({type: 'edit',payload: e});
    }

    return(
    <BdContext.Provider value={{state, del, update, add,objeto,setObjeto}}>
        {children}
    </BdContext.Provider>
    )
};

export {BdContext, BdProvider};