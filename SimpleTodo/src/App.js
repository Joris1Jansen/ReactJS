import Todo from "./components/Todo";

const DUMMY_TODO = ["Learn React", "Learn Vue"];

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo todos={DUMMY_TODO} />
    </div>
  );
}

export default App;
