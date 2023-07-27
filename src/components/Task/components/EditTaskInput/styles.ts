import styled from 'styled-components/native'
import IconCheck from 'react-native-vector-icons/Octicons'

export const EditContainer = styled.View`
  margin: 8px 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  border-radius: 8px;
  gap: 12px;
`

export const EditInput = styled.TextInput`
  flex: 1;
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.colors.gray_400};
  color: ${({ theme }) => theme.colors.gray_200};
  align-items: flex-start;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: 14px;
`

export const EditBtn = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blue_500};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 12px;
`
export const CheckIcon = styled(IconCheck)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray_100};
`
