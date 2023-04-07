import React, { useReducer } from "react";
import { Todo } from "../model";

type Action =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const reducerName = (state: Todo[], action: Action) => {
  // write a code according to your project
};

const Reduser = () => {
  const [state, dispatch] = useReducer(reducerName, []);
  return <div>reduser</div>;
};

export default Reduser;
