import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  Button,
  Form,
  Container,
} from "reactstrap";
import { v4 } from "uuid";

const TOdoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please fill some value");
    }
    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);
    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter a todo string"
          value={todoString}
          onChange={(e) => setTodoString(e.target.value)}
        />
        <Button color= "success" >Add TOdo</Button>
      </InputGroup>
    </Form>
  );
};

export default TOdoForm;