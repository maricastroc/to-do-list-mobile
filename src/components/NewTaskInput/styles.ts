import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

export const NewTaskInputContainer = styled.View`
  flex-direction: row;
  padding: 0 24px;
  align-items: stretch;
  justify-content: center;
  margin-top: -27px;
  gap: 8px;
`

export const TaskInput = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 16px;
  font-family: ${({ theme }) => theme.font_family.regular};
  border: solid 1px ${({ theme }) => theme.colors.gray_700};
  font-size: 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray_100};
`

export const AddTaskBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue_500};
  border-radius: 8px;
  padding: 17px;
`

export const AddIcon = styled(Icon)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray_100};
`
