import styled from 'styled-components/native'

export const FilterBarContainer = styled.View`
  width: 100%;
  margin-top: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`

export const FilterBarWrapper = styled.View`
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  gap: 16px;
`

export const FilterTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: 16px;
`

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const SearchTaskInput = styled.TextInput`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 10px;
  font-family: ${({ theme }) => theme.font_family.regular};
  border: solid 1px ${({ theme }) => theme.colors.gray_700};
  font-size: 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray_100};
`
