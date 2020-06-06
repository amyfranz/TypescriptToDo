import React, { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
library.add(faArrowAltCircleRight);

interface AddToDoFormProps {
  addTodo: AddTodo;
}

export const AddToDoForm: React.FC<AddToDoFormProps> = ({ addTodo }) => {
  const [newToDo, setNewToDo] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newToDo);
    setNewToDo("");
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Activity"
        value={newToDo}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </form>
  );
};
