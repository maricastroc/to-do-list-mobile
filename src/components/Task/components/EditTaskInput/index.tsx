import { useContext, useState } from 'react'
import { CheckIcon, EditBtn, EditContainer, EditInput } from './styles'
import { TasksContext } from '../../../../contexts/TasksContext'

interface EditTaskInputProps {
  content: string
}

export function EditTaskInput({ content }: EditTaskInputProps) {
  const [newContent, setNewContent] = useState(content)
  const { handleEditTask } = useContext(TasksContext)

  function onHandleEditTask() {
    handleEditTask(content, newContent)
  }

  return (
    <EditContainer>
      <EditInput value={newContent} onChangeText={setNewContent} />
      <EditBtn onPress={() => onHandleEditTask()}>
        <CheckIcon name="check" />
      </EditBtn>
    </EditContainer>
  )
}
