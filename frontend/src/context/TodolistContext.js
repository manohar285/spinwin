import { createContext, useReducer } from "react";

export const TodolistsContext = createContext();

export const todolistsReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOLISTS":
      return {
        todolists: action.payload,
      };
    case "CREATE_TODOLISTS":
      return {
        todolists: [action.payload, ...state.todolists],
      };
    case "DELETE_WORKOUT":
      return {
        todolists: state.todolists.filter((t) => t._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export const TodolistsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todolistsReducer, {
    todolists: null,
  });

  return (
    <TodolistsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodolistsContext.Provider>
  );
};
