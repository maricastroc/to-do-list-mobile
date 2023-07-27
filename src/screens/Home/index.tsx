import {
  Container,
  Counter,
  FilterContainer,
  Separator,
  TaskTitleCounter,
  TaskTitleItem,
  TaskTitleText,
  TasksContainer,
  TasksTitleContainer,
  TasksTitleContent,
} from './styles'
import { Header } from '../../components/Header'
import { NewTaskInput } from '../../components/NewTaskInput'
import { FilterBar } from '../../components/FilterBar'
import theme from '../../theme'
import { Task } from '../../components/Task'
import { useContext, useState } from 'react'
import { TasksContext } from '../../contexts/TasksContext'
import { FlatList } from 'react-native'

export function Home() {
  const [tasksToRender, setTasksToRender] = useState('all')
  const [searchValue, setSearchValue] = useState('')
  const { tasksList, finishedTasksList, unfinishedTasksList } =
    useContext(TasksContext)

  function searchTasks(searchValue: string) {
    return getTasksToRender().filter((task) =>
      task.toLowerCase().includes(searchValue.toLowerCase()),
    )
  }

  function getTasksToRender() {
    switch (tasksToRender) {
      case 'all':
        return tasksList
      case 'to-do':
        return unfinishedTasksList
      case 'done':
        return finishedTasksList
      default:
        return tasksList
    }
  }

  return (
    <Container>
      <Header />
      <NewTaskInput />
      <TasksTitleContainer>
        <TasksTitleContent>
          <TaskTitleItem>
            <TaskTitleText
              style={{
                color: theme.colors.blue_300,
              }}
            >
              Created
            </TaskTitleText>
            <TaskTitleCounter>
              <Counter>{tasksList.length}</Counter>
            </TaskTitleCounter>
          </TaskTitleItem>
          <TaskTitleItem>
            <TaskTitleText
              style={{
                color: theme.colors.purple_300,
              }}
            >
              Finished
            </TaskTitleText>
            <TaskTitleCounter>
              <Counter>{finishedTasksList.length}</Counter>
            </TaskTitleCounter>
          </TaskTitleItem>
        </TasksTitleContent>
        <Separator />
      </TasksTitleContainer>
      <FilterContainer>
        <FilterBar
          onFilter={(value: string) => setTasksToRender(value)}
          onChange={(value) => setSearchValue(value)}
        />
        <Separator />
      </FilterContainer>
      <TasksContainer>
        <FlatList
          data={searchValue ? searchTasks(searchValue) : getTasksToRender()}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Task key={item} content={item} />}
          showsVerticalScrollIndicator={false}
        />
      </TasksContainer>
    </Container>
  )
}
