import { Alert } from 'react-native'
import { TasksContext } from '../../contexts/TasksContext'
import theme from '../../theme'
import { AddIcon, AddTaskBtn, NewTaskInputContainer, TaskInput } from './styles'
import React, { useState, useContext } from 'react'

export function NewTaskInput() {
  const [isFocused, setIsFocused] = useState(false)
  const [newTask, setNewTask] = useState('')
  const { handleAddNewTask, tasksList } = useContext(TasksContext)

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  function onHandleNewTask() {
    if (newTask.length === 0) {
      Alert.alert('Invalid Task', 'Please, insert a valid task.', [
        {
          text: 'OK',
          onPress: () => {
            setNewTask('')
          },
        },
      ])
      return
    } else if (tasksList.includes(newTask)) {
      Alert.alert(
        'Task Already Exists',
        'A task with the same name already exists.',
        [
          {
            text: 'OK',
            onPress: () => {
              setNewTask('')
            },
          },
        ],
      )
      return
    }

    handleAddNewTask(newTask)
    setNewTask('')
  }

  return (
    <NewTaskInputContainer>
      <TaskInput
        style={{
          borderColor: isFocused
            ? theme.colors.purple_500
            : theme.colors.gray_700,
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Add your task here"
        placeholderTextColor={theme.colors.gray_300}
      />
      <AddTaskBtn onPress={() => onHandleNewTask()}>
        <AddIcon name="plus-circle" />
      </AddTaskBtn>
    </NewTaskInputContainer>
  )
}
