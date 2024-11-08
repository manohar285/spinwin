import { TodolistsContext } from "../context/TodolistContext";
import { useContext } from "react";

export const useTodolistContext = () => {
  const context = useContext(TodolistsContext);

  if (!context) {
    throw Error(
      "useTodolistContext must be useed inside an TodolistContextProvider"
    );
  }

  return context;
};
