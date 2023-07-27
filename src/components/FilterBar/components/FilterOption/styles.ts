import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const FilterOptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const FilterOptionText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: 14px;
`

export const FilterOptionBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 4px;
  width: 20px;
  height: 20px;
`

export const FilterOptionIcon = styled(Icon)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray_100};
`
