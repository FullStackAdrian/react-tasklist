import './App.css'
import TaskForm from './features/TaskList/ui/TaskForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TaskForm/>
    </>
  )
}

export default App
