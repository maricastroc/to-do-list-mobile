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
  const { tasksList, finishedTasksList, unfinishedTasksList } =
    useContext(TasksContext)

  console.log(finishedTasksList)

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
              <Counter>1</Counter>
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
              <Counter>1</Counter>
            </TaskTitleCounter>
          </TaskTitleItem>
        </TasksTitleContent>
        <Separator />
      </TasksTitleContainer>
      <FilterContainer>
        <FilterBar onFilter={(value: string) => setTasksToRender(value)} />
        <Separator />
      </FilterContainer>
      <TasksContainer>
        <FlatList
          data={getTasksToRender()}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Task key={item} content={item} />}
          showsVerticalScrollIndicator={false}
        />
      </TasksContainer>
    </Container>
  )
}
