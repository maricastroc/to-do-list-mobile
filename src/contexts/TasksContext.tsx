import { createContext, ReactNode, useState, useEffect } from 'react'

interface TasksContextData {
  tasksList: string[]
  handleAddNewTask: (newTask: string) => void
  handleRemoveTask: (taskToRemove: string) => void
  finishedTasksList: string[]
  unfinishedTasksList: string[]
  handleAddFinishedTask: (newTask: string) => void
  handleRemoveFinishedTask: (taskToRemove: string) => void
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData,
)

interface TasksContextProviderProps {
  children: ReactNode
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasksList, setTasksList] = useState<string[]>([])
  const [finishedTasksList, setFinishedTasksList] = useState<string[]>([])
  const [unfinishedTasksList, setUnfinishedTasksList] = useState<string[]>([])

  useEffect(() => {
    const unfinishedTasks = tasksList.filter(
      (task) => !finishedTasksList.includes(task),
    )
    setUnfinishedTasksList(unfinishedTasks)
  }, [tasksList, finishedTasksList])

  function handleAddNewTask(newTask: string) {
    setTasksList((prevState) => [...prevState, newTask])
  }

  function handleRemoveTask(taskToRemove: string) {
    setTasksList((prevState) =>
      prevState.filter((task) => taskToRemove !== task),
    )
  }

  function handleAddFinishedTask(newTask: string) {
    setFinishedTasksList((prevState) => [...prevState, newTask])
  }

  function handleRemoveFinishedTask(taskToRemove: string) {
    setFinishedTasksList((prevState) =>
      prevState.filter((task) => taskToRemove !== task),
    )
  }

  const TasksContextValue: TasksContextData = {
    tasksList,
    handleAddNewTask,
    handleRemoveTask,
    finishedTasksList,
    unfinishedTasksList,
    handleAddFinishedTask,
    handleRemoveFinishedTask,
  }

  return (
    <TasksContext.Provider value={TasksContextValue}>
      {children}
    </TasksContext.Provider>
  )
}
