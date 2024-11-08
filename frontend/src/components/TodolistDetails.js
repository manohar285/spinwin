import React from "react";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useTodolistContext } from "../hooks/useTodolistsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const TodolistDetails = ({ todolist }) => {
  const { dispatch } = useTodolistContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch("/api/todolists/" + todolist._id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  // console.log(todolist, "checking");
  return (
    <div className="todolist-details">
      <h4>{todolist.title}</h4>
      <p>{todolist.description}</p>
      <p>
        {formatDistanceToNow(new Date(todolist.createdAt), {
          addPrefix: true,
          addSuffix: true,
        })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default TodolistDetails;
