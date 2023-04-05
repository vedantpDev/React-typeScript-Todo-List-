import React, { useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        // when we write the todo in input feild, background become blur, to do it normal we used "inputRef"
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
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
