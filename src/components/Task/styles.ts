import styled from 'styled-components/native'
import IconTrash from 'react-native-vector-icons/Feather'
import IconCheck from 'react-native-vector-icons/Octicons'
import IconEdit from 'react-native-vector-icons/Entypo'

export const TaskContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 12px;
`

export const TaskContent = styled.View`
  padding: 12px;
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_500};
  align-items: center;
  justify-content: space-between;
  border: solid 1px ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;
`

export const TaskTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

export const TaskText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_100};
`

export const UncheckBtn = styled.TouchableOpacity`
  border: solid 1px ${({ theme }) => theme.colors.blue_300};
  border-radius: 50%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`

export const CheckBtn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.purple_500};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`

export const DeleteBtn = styled.TouchableOpacity`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`

export const EditBtn = styled.TouchableOpacity`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`

export const CheckIcon = styled(IconCheck)`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray_100};
`

export const TrashIcon = styled(IconTrash)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray_300};
`

export const EditIcon = styled(IconEdit)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray_300};
`
