import React from "react";
import "./styles.css";

// Why we Create the interface for the props ?
// => Bcoz, we are using typscrip in this project, so that we have to set the type of the props.
// To identify the functions type, hover over it and copy the type.
//Second Options : const Inputfeild React.FC<Props>= ({todo, setTodo} )

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

const Inputfeild = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
        className="input_box"
      />

      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default Inputfeild;
