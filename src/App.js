// import logo from './logo.svg';
// import './App.css';

const todos = [
  { text: 'Hacer curso de React', completed: false },
  { text: 'Estudiar React', completed: false },
  { text: 'Comer', completed: false },
  { text: 'Dormir', completed: false },
]

function App() {
  return (
    <div>
      <TodoCounter />
      <h2>Has completado 2 de 5 TODOs</h2>
      <TodoSearch />
      <input placeholder="Buscar..." />
      <TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </div>
  );
}

export default App;
