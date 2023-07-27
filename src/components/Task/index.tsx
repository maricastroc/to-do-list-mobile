import { Alert } from 'react-native'
import { TasksContext } from '../../contexts/TasksContext'
import {
  CheckBtn,
  CheckIcon,
  DeleteBtn,
  EditBtn,
  EditIcon,
  IconsContainer,
  TaskContainer,
  TaskText,
  TaskTextContainer,
  TrashIcon,
  UncheckBtn,
} from './styles'
import { useContext } from 'react'

interface TaskProps {
  content: string
}

export function Task({ content }: TaskProps) {
  const {
    finishedTasksList,
    handleRemoveTask,
    handleAddFinishedTask,
    handleRemoveFinishedTask,
  } = useContext(TasksContext)

  const isTaskFinished = finishedTasksList.includes(content)

  function onHandleRemoveTask() {
    Alert.alert('Remove', `Are you sure you want to remove this task?`, [
      {
        text: 'Yes',
        onPress: () => handleRemoveTask(content),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ])
  }

  return (
    <TaskContainer>
      <TaskTextContainer>
        {isTaskFinished ? (
          <CheckBtn onPress={() => handleRemoveFinishedTask(content)}>
            <CheckIcon name="check" />
          </CheckBtn>
        ) : (
          <UncheckBtn onPress={() => handleAddFinishedTask(content)} />
        )}
        <TaskText>{content}</TaskText>
      </TaskTextContainer>
      <IconsContainer>
        <EditBtn>
          <EditIcon name="pencil" />
        </EditBtn>
        <DeleteBtn onPress={() => onHandleRemoveTask()}>
          <TrashIcon name="trash-2" />
        </DeleteBtn>
      </IconsContainer>
    </TaskContainer>
  )
}
