import React, { useReducer, createContext } from 'react';

const CrudContext = createContext();

const mapReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      if (action.payload.title == '') {
        return [...state];
      }
      return [...state, action.payload];

    case 'update':
      var item = state[action.index];

      item.title = action.payload.title;
      item.description = action.payload.description;

      return [...state.slice(0, action.index), item, ...state.slice(action.index + 1)];

    case 'remove':
      var item = state[action.index];

      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];

    default: //read
      return [...state];
  }
}

const CrudProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, []);

  const add = (payload) => {
    dispatch({ type: 'add', payload: payload });
  }

  const update = (index, payload) => {
    dispatch({ type: 'update', index: index, payload: payload });
  }

  const remove = (index) => {
    dispatch({ type: 'remove', index: index });
  }

  return (
    <CrudContext.Provider value={{ state, add, update, remove }}>
      {children}
    </CrudContext.Provider>
  )
}

export { CrudContext, CrudProvider };
