import React from "react"
import { Title } from "./components/Title"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"
import { useState, useEffect } from "react"

interface AppProps {
  name: string
}
const App: React.FC<AppProps> = (props: AppProps) => {
  const [tasks, setTasks] = useState({})

  return (
    <div className="title">

        <Title
          title="Todo List with: Elixir + Typescript + React"
          subtitle="What do you have to do today?"
          />
          <TaskForm setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
