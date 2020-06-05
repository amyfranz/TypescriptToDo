type Todo = {
  text: string;
  completion: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: string) => void;
